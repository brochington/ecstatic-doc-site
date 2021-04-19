---
id: component
title: Component
sidebar_label: Component
slug: component
---

`Components` in Ecstatic can be anything that is a class, granting some HUGE flexibility. 

## Tips

It's helpful to think of `Components` as "balls of state". While methods may exist on a `Component`, be careful that they aren't doing too much. It's good to keep these methods isolated to updating and managing state that exists on the `Component`. Leave most logic to a `System`.

Extending `Components` can be really helpful in targeting the right `Systems`.

```typescript
// Components
class AwesomeComp {}

class VeryAwesomeComp extends AwesomeComp {}

class SuperAwesomeComp extends AwesomeComp {}

// Systems
// Both Systems can have access to the same data, but can run at different times.
world.addSystem([VeryAwesomeComp], VeryAwesomeStuff);

world.addSystem([SuperAwesomeComp], SuperAwesomeStuff);

```