---
title: On UI Animations
date: 2020/5/27
---

# On UI Animations

Thanks [Paco](https://paco.im) for bringing up this great topic, and creating the outline of this article while we brainstorming the animation part of our [design system](https://vercel.com/design). Here're some personal notes that I think worth writing down. 

## Establish Common Transition Values and Specify Them as Design Tokens

This (using CSS variables for animations) will be very helpful for most of our use cases. I personally prefer `ease` with a small duration (~200ms) as the transition, but we can define our own easing function too.

## Define What Transitions Should Be Used in What Context

We can divide all transitions into 2 groups:

**A. Style (opacity, color, background, shadow, border, transform, etc.)**

When transitioning a style, the animation should be *subtle* and it serves the functionality of noticing the user that something has appeared, disappeared, or changed, or simply showing that some element is interactable.

This covers most components such as popover, tooltip, menu, button, link, modal, ... and in this case, we should simply use the CSS variables defined based on the *varying property*.

**B. Layout (top, left, bottom, right, height, width, etc.)**

When transitioning the layout, we usually want to show the logic of the UI implicitly to the user, so they will have the sense of.

Things with a fixed layout (so the animation will have a fixed timing and range). They should be tweaked case by case, e.g.: [feedback input](https://vercel.com/design/feedback) and [toast](https://vercel.com/design/toast).

For things which we can't predict the size and position (they change based on the dynamic content), e.g.: [file tree](https://vercel.com/design/file-tree), [collapse](https://vercel.com/design/collapse), [show more](https://vercel.com/design/show-more), [drawer](https://vercel.com/design/drawer)..., there're 2 difficulties:

- It's not allowed to use CSS to animate a size from `0` to `auto`. So the target size has to be measured (`getBoundingClientRect`) before the actual animation happens. That makes it harder to implement correctly.
- Need to handle window resizing events as well, since the target size can change.

In this case, we should use spring animations (e.g.: react-spring, react-motion) with ResizeObserver to measure the size dynamically, which is a better practice in the sense of both design and engineering.

## When Is *No Animation* Desirable?

- Keep all the animation variables in one place, so we can have the ability to toggle them via one single class `.reduce-motion` in the future.
- For toolbar menus or submenus, when hover and moving between items we don't want the popover to fade-in or fade-out frequently. User should focus on the content, not the animation itself. And the menu should be *visually continuous*, like [stripe.com](https://stripe.com) or just disable the animation when moving the cursor between items like what macOS does.
- Functionality first. For very common components such as tooltips and menus, we should try to reduce the animation as much as possible: they don't provide much info but instead can be really annoying. That's why the macOS' menu has only the fade-out transition, and the content will be shown instantly when user needs it. Contrarily, Material Design has too many useless animations.
- If the (DOM) animation slows down the website, remove it. We can look for alternatives like video, canvas, or SVG.