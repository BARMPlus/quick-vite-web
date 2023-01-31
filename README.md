## 开发环境启动

```bash
yarn install #安装依赖
yarn start  #启动项目
```

## 代码规范检测
```bash
yarn lint:js
yarn lint:css
yarn lint
```

## 生成环境构建
```bash
yarn build #构建应用
```

## 代码规范

引入文件

```typescript
// import时，需要按照第三方包、绝对路径、相对路径、类型定义、样式顺序进行引入
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

import { LoginApi } from '@/api'

import Sidebar from './siderbar'
import Navbar from './navbar'

import type { FC, ReactNode } from 'react'

import './index.less'
```

## 注意事项

1. 使用 TS 开发，请尽量减少使用 any
2. 修改共用组件确认 tsc --noEmit 通过
3. 统一使用 hooks 开发
4. 配置 MUI 组件样式
   涉及到基础组件的样式，统一在 theme 文件夹下修改
5. css color
   所需要用到的 rgb color 已经在 tailwindcss 里配置,可直接使用
6. lint
   代码 commit 之前会由 lint-staged 执行 eslint、prettier、stylelint 等修复代码、样式等文件格式

## Refs

- ✅ React v18
- ✅ 组件库 MUI
- ✅ axios + react-query
- ✅ ts + esm
- ✅ yarn + vite.js + eslint + prettier + lint-staged
- ✅ tailwind css
