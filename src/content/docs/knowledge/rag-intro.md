---
title: RAG技术
description: 一点关于RAG技术的介绍。
---
作者：Zeena

> RAG技术，全称Retrieval-Augmented Generation，中文称为检索增强生成。它是一种结合了检索和生成的技术，旨在提高AI系统在回答问题时的准确性和可靠性

---
📋 目录

- [1 RAG技术是什么](#1-r-技术是什么)
- [2 RAG的案例](#2-r-的案例)
- [3 小白实操RAG指南](#3-小白实操r-指南)
- [4 RAG的核心优势](#4-r-的核心优势)
- [5 使用RAG时候的注意事项](#5-使用r-ag时候的注意事项)

---

## 1 RAG技术是什么❓
**RAG（检索增强生成）** 是一种结合信息检索和文本生成的技术，让AI在回答问题时能主动查找外部知识库，像人类“查资料”一样提升回答的准确性。

RAG技术就像给AI配了一个“智能助手+图书馆”组合。当用户提问时，它会先从指定数据库中查找相关内容，然后结合查到的资料生成更准确的回答。

想象你要写一篇关于恐龙的文章，但记不清具体数据。这时你会：

1. **查资料**（检索）：翻书/上网找恐龙相关的权威信息
2. **整合内容**（增强）：把查到的资料和自己的知识结合
3. **写文章**（生成）：用易懂的语言输出结果

RAG就是让AI模拟这个过程：**先检索相关知识，再生成答案**，避免“瞎编”。

---

## 2 RAG的案例🤓

**1. 法律咨询助手**

- **场景**：企业法务用AI判断“要求员工提供父母房产证明是否合法”
- **RAG应用**：
    - **检索**：自动查找《个人信息保护法》《民法典》相关条款
    - **生成**：结合法律条文，输出“此要求涉嫌侵犯隐私”的结论
- **效果**：比单纯问AI更精准，直接引用具体法条（如搜索结果中的案例）。

**2. AI编程辅助**

- **场景**：小白用通义灵码写“批量下载图片的脚本”
- **RAG应用**：
    - **检索**：从代码库中查找类似功能的代码片段
    - **生成**：组合检索到的代码，生成可运行的Python脚本
- **效果**：无需懂编程语法，AI自动补全专业代码（如搜索结果中“下载5000张图片”案例）。

**3. 个性化内容生成**

- **场景**：用AI给客户写新年祝福邮件
- **RAG应用**：
    - **检索**：从历史邮件中提取客户偏好（如喜欢简洁/幽默）
    - **生成**：结合检索结果生成定制化内容
- **效果**：比通用祝福更贴心（如搜索结果中“AI生成祝福语”案例）。

---
## 3 小白实操RAG指南☝️

**方法1：用现成工具体验RAG**

1. **通义灵码**（适合编程）：
    - 安装VSCode → 搜索安装“通义灵码”插件
    - 输入需求：“写一个Python脚本，把网页链接里的图片下载到本地”
    - AI会自动检索类似代码并生成可运行脚本。
2. **Kimi/DeepSeek**（适合通用问题）：
    - 提问时添加指令：“请先检索最新政策，再回答：深圳人才租房需要查父母房产吗？”
    - AI会优先查找政府文件，再生成答案。

**方法2：自建简易RAG（无需代码）**

1. **准备知识库**：把专业资料（如公司制度、产品手册）整理成TXT文件
2. **使用工具**：在豆包/扣子等平台上传文件，创建“智能体”
3. **提问测试**：“根据知识库，回答客户退货流程是什么？”

---

## 4 RAG的核心优势😎

| **场景** | **传统AI回答** | **RAG增强回答** |
| --- | --- | --- |
| 法律咨询 | “可能不合法” | “根据《个人信息保护法》第XX条，此要求涉嫌违规” |
| 写代码 | 通用代码片段 | 结合公司代码规范生成的定制代码 |
| 医疗建议 | “建议多休息” | “检索到协和医院指南指出：此症状应优先检查XX项目” |

- 最新知识：RAG可以访问知识库中的最新信息，而无需重新训练模型。
- 提高准确性：通过检索准确信息，RAG减少了生成错误内容的可能性。
- 定制化：企业可以根据自己的需求构建RAG系统，创建特定领域的AI助手。
- 透明度：RAG系统通常可以提供信息来源，让用户更容易验证回答的可靠性。

1. **最新知识**
RAG可以访问知识库中的最新信息，而无需重新训练模型。这意味着RAG系统能够始终保持知识的更新，特别是在快速变化的信息环境中，这一点尤为重要。

2. **提高准确性**
通过检索准确信息，RAG减少了生成错误内容的可能性。通过结合外部知识库，RAG能够显著提高回答的准确性和可靠性，减少“幻觉”问题的发生。

3. **定制化**
企业可以根据自己的需求构建RAG系统，创建特定领域的AI助手。这种定制化的特性使得RAG系统能够适应不同的业务需求和应用场景，提供高度定制化的服务。

4. **透明度**
RAG系统通常可以提供信息来源，让用户更容易验证回答的可靠性。这种透明度特性增强了用户对AI系统输出的信任，特别是在需要高准确性的应用场景中。

---

## 5 使用RAG时候的注意事项⚠️

1. **知识库质量决定效果**：喂给AI的资料需准确（如用政府官网内容而非自媒体文章）
2. **明确需求**：提问时尽量具体，如：“检索2024年深圳人才安居政策，总结申请条件”
3. **交叉验证**：对重要结论（如法律/医疗建议），用多个AI工具比对结果

RAG技术正在让AI从“会聊天”升级为“懂业务的助手”。普通人只需学会清晰描述需求，就能用它处理工作报表、法律咨询、学习笔记等复杂任务，真正成为“外挂大脑”。

---

## 参考文献
【一文带你了解RAG(检索增强生成) | 概念理论介绍+ 代码实操】
https://mp.weixin.qq.com/s?__biz=MzAxMTU5Njg4NQ==&mid=2247501724&idx=3&sn=debf3ca78cbf2d7673fb4d4f362eeb12&chksm=9ae533b3d6b4a0e8d6b8a7ae47e155cef05e62646c089e2ef370b38b2196d446d5585855df6c#rd

【写给小白的大模型应用科普：RAG 篇 | 留言赠书】
https://mp.weixin.qq.com/s?__biz=MzIwOTc2MTUyMg==&mid=2247568800&idx=2&sn=254f46e96e1519004a631e8021bfb54d&chksm=9654d911586b18ef04904c47533950707792a59561191e17f51e864f69693740411d0d35f97f#rd

【检索增强生成RAG技术入门介绍】
https://mp.weixin.qq.com/s?__biz=MzkzODI1NzQyNA==&mid=2247490643&idx=1&sn=cfcb47db3ceaa0a9b7ca824032d6d7f6&chksm=c3ecf0ef4aa7aec7fac2dec32f37c04087605ab63eead31e912c7a720445c6433ba5e02f0e89#rd

