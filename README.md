
### 开发命令
```bash
yarn  # 安装所有依赖

yarn start # 启动开发环境

yarn build # 构建

yarn lint # eslint、stylelint规则检测
```

### 编码规范
#### 1. 引入文件

```typescript
// import时，需要按照 绝对路径、相对路径JS、相对路径CSS、Type排列
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

import Sidebar from './siderbar'
import Navbar from './navbar'

import './index.css'

import type { FC, ReactNode } from 'react'
import type { IProps } from './types'
```

#### 2. 规则校验
- 提交代码时，会自动进行 prettier 格式化
- 内置 eslint、stylelint 规则检测，commit 前会自动检测，如有错误请修改后再提交
- commit lint 规范，commit message 请按照规范填写，如有错误请修改后再提交

### CHANGELOG生成
- 未完成的任务，message填写 e.g.（chore: 低代码xx模块开发TODO）
- feat、fix开头的commit会被写入CHANGELOG

```bash
  # 生成version 
  yarn standard-version # 修改根目录下版本号（Yarn）、CHANGELOG.md更新（GitHook）、自动提交commit（Yarn）、自动打上tag（Yarn）、提交代码和tag（GitHook）
```


### 相关技术栈
-  React + Antd + Rematch
-  axios + @tanstack/react-query
-  EsLint + StyleLint + Prettier
-  Husky + Lint-Staged + CommitLint
-  Typescript + ESM

### 注意事项

1. 使用 Typescript 开发，尽量减少使用 any
2. 修改共用组件确认 tsc --noEmit 通过
3. 统一使用 hooks 开发
