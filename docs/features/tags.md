---
id: tags
title: Tags
sidebar_label: Tags
slug: tags
---

Tags may be added to entities in much the same way as components. A tag is just a string.

```typescript
const myEntity = world.createEntity().addTag('AwesomeTag');
```

Entities can be queried by tag

```typescript
// If a tag is known to be unique, with only one associated entity
const myEntity = world.getTagged('AwesomeTag');

// If there might be multiple entities that share a tag
const taggedEntities = world.getAllTagged('AwesomeTag');

```

If you are going to use tags to help in locating 