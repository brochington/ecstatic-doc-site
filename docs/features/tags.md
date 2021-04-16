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

If you are going to use tags to help in locating entities across an app, it's recommended that you use constant or enum values as the keys so that if they change, they can be updated in a central location

```typescript
// tags.js
export const MY_TAG = "awesome-tag";


// elsewhere.js
import { MY_TAG } from "tags";

const entityWithTag = world.createEntity().addTag(MY_TAG);
```