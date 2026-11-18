// 在这里维护团队主页。研究成果和成员有可公开的资料后，可按注释中的格式添加。
const teamSite = {
  name: "Universe Lab",
  headline: "世界模型与空间智能",
  intro: "Universe Lab 探索能够理解、生成和推演三维世界的模型，以及基于世界模型自主规划、通过交互持续学习的智能体。我们以三维与四维场景重建为基础，连接感知、生成与决策。",
  vision: "我们希望智能体能够建立对环境的三维表征，在行动前推演可能结果，并在新观测到来时修正模型与计划。我们的长期目标是让世界模型成为自主系统进行预测、规划与学习的基础。",
  heroImage: "./hero.jpg",
  about: "我们是一支由学生自主驱动、跨华东师范大学与上海创智学院协作的研究团队。团队围绕世界模型、空间智能与自主智能体开展研究，目前以自动驾驶场景的重建、生成和闭环评测作为主要验证任务。",
  practices: [
    { title: "围绕问题协作", description: "通过论文讨论、代码分享与实验评审对齐理解，在复现、实现与评测中共同推进研究。" },
    { title: "AI 辅助研究", description: "将 AI 用于论文跟踪、编程、实验与文档整理，让研究过程更易讨论和复现。" },
    { title: "面向真实任务", description: "以实际场景检验方法，通过开源工具与可复现的实验积累能够被他人使用的成果。" },
  ],
  research: [
    {
      title: "三维世界模型与空间表征",
      description: "如何从有限观测恢复可持续更新的三维世界？我们研究前馈式 3D/4D 重建、动静分离与长序列场景表征，探索几何、外观与运动的一致建模。",
    },
    {
      title: "可控世界生成与交互仿真",
      description: "如何生成可编辑、可交互且保持时空一致性的场景？我们探索场景补全、轨迹与行为控制、多参与者交互，用可控变体支持数据生成和反事实推演。",
    },
    {
      title: "模型驱动的自主智能体",
      description: "如何让智能体利用世界模型预测后果并自主规划？我们研究目标分解、工具协作与反馈驱动的迭代，以闭环评测检验规划效果，并为持续学习提供依据。",
    },
  ],
  project: {
    title: "World Corner Agent",
    description: "面向自动驾驶长尾风险的研究项目。我们探索如何让智能体主动发现测试覆盖缺口，生成难以在真实道路上重复采集的风险事件，并在闭环仿真中验证它们。",
    steps: [
      { title: "定位失效", description: "从运行日志和模型表现中寻找覆盖缺口，确定要验证的风险和触发条件。" },
      { title: "重建并生成变体", description: "重建、补全三维场景，再调整遮挡、参与者轨迹或交互时机，生成可控变体。" },
      { title: "仿真与评估", description: "运行多智能体仿真，评估场景的合理性、风险程度和驾驶策略的表现。" },
      { title: "反馈与再验证", description: "将有效样本用于训练和独立验证，用反馈决定下一轮生成目标。" },
    ],
    example: "例如，从一段雨夜高速行驶记录出发，调整车辆切入、前车急刹与后车逼近的时机，比较不同组合下驾驶策略的表现。",
  },
  work: [
    { type: "研究项目", title: "FreeForward4D", description: "探索无需输入相机位姿的前馈式 4D 驾驶场景重建。", url: "https://akkzzzz.github.io/FreeForward4D/" },
    { type: "在研方向", title: "ADForward", description: "探索无标注、流式状态驱动的持续前馈重建，支持长序列场景建模。", url: "" },
    { type: "开源工具", title: "ADToolBox", description: "面向驾驶场景的可组合工具，覆盖视频检索、动态重建、场景编辑与策略评估。", url: "https://github.com/Max-luo-song/ADToolBox" },
  ],
  people: [
    { name: "郭洛松", research: "待补充", status: "学院学生 · 2025级", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "高浩淳", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "杨翔", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "林鼎澔", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "罗毅", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "侯振宇", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "高傲", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "李超阳", research: "待补充", status: "学院学生 · 2024级", bio: "", photo: "./member-placeholder.jpg", url: "" },
  ],
  contact: {
    text: "欢迎围绕三维重建与补全、可控场景生成、多智能体仿真和自主规划交流研究想法。我们也期待与拥有真实场景、评测任务或相关技术的伙伴开展合作。",
    email: "",
  },
};
