---
title: '几个实用的 TypeScript 类型技巧'
description: '记录日常开发中常用的 TypeScript 类型写法：Partial、Pick、条件类型、类型守卫等。'
pubDate: 2025-09-10
tags: ['TypeScript', '前端', '类型系统']
category: '技术'
---

整理几个用得最多的 TypeScript 类型技巧，配可运行示例。

## Partial 与 Required

把一个类型的所有属性变成可选，或反之：

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPatch = Partial<User>;   // 全部可选
type UserStrict = Required<User>; // 全部必填
```

更新接口里常用 `Partial`：

```typescript
function updateUser(id: number, patch: Partial<User>) {
  // 只传需要改的字段即可
}
```

## Pick 与 Omit

从一个类型里挑或去掉某些字段：

```typescript
type UserSummary = Pick<User, 'id' | 'name'>;
type UserWithoutId = Omit<User, 'id'>;
```

## 类型守卫（Type Guard）

用函数判断收窄类型：

```typescript
function isError(x: unknown): x is Error {
  return x instanceof Error;
}

try {
  doSomething();
} catch (e) {
  if (isError(e)) {
    console.error(e.message);
  }
}
```

## 条件类型 + infer

从函数签名里反推返回值类型：

```typescript
type ReturnTypeOf<T> = T extends (...args: never[]) => infer R ? R : never;

function getString(): string { return 'hi'; }
type R = ReturnTypeOf<typeof getString>; // string
```

## as const 稢得字面量类型

```typescript
const roles = ['admin', 'editor', 'viewer'] as const;
type Role = (typeof roles)[number]; // 'admin' | 'editor' | 'viewer'
```

善用这些，能让类型帮你挡掉不少运行时 bug。
