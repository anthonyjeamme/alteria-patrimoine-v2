# Makasi Mongodb Connector

## Installation

### 1 Install dependency

```bash
npm i @makasi/mongodb-connector
```

### 2 Add data route

```typescript
// app/api/data/[...route]/route.ts

import { getRouter } from "@makasi/next";
import MongodbConnector from "@makasi/mongodb-connector";

export const { GET, POST, DELETE, PUT } = getRouter(
  new MongodbConnector(process.env["MONGODB_URI"] as string)
);
```
