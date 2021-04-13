---
id: what-is-ecs
title: What is ECS?
sidebar_label: What is ECS?
slug: what-is-ecs
---

ECS stands for `Entity, Component, System`, and is a way to organize logic and state in your code. Although the definition of each of these parts can vary greatly with the implementation,  the way that Ecstatic defines these is:

- `Entity` - An unique ID. Ecstatic houses this ID in an object with some helper methods (`new Entity()`) .

- `Component` - A container of state, that has a type. Each instance of a Component is usually linked to an Entity. Basically the Entity has a collection of components that are "attached" to it.

- `Systems` - Systems are functions that iterate all Entities that have Components that match certain types. If I have an Entity with a `MyComponent` Component added to it, and I have a System that is set to be called on all Entities that have a `MyComponent` Component attached to it, then my Sytem will be called. The important part here is that the composition of the types of Components is what determines what logic is run. Usually Systems are run every "tick", and in a loop.