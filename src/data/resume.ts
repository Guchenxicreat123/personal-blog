/**
 * 简历数据 —— 脱敏版本（公开仓库不能含真实身份信息）
 *
 * ⚠️ 部署到 GitHub 前请确认：
 *   1. 真实姓名、手机、邮箱、学校、公司、GitHub、地址均已脱敏
 *   2. 真实简历请保存在本地或私有云盘
 *   3. 这个文件用作博客模板示例
 */
export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  location: string;
  phone?: string;
  email: string;
  github?: string;
  website?: string;
  skills: { label: string; items: string[] }[];
  experience: {
    role: string;
    org: string;
    period: string;
    highlights: string[];
  }[];
  projects: {
    name: string;
    link?: string;
    description: string;
    tech: string[];
  }[];
  education: {
    school: string;
    degree: string;
    major: string;
    period: string;
  }[];
  certifications?: string[];
}

export const resume: ResumeData = {
  name: '示例姓名',
  title: '对日系统工程师 · Java / COBOL 应用开发',
  summary:
    '约 4 年对日软件开发经验示例描述（脱敏）：贯通「詳細設計（仕様書）→ 製造 → 単体/結合テスト → 移行 → 障害対応」的对日瀑布式全流程。精通 Java（含客户内部 Spring Boot 式企业框架）与 COBOL 批处理，熟练运用 Oracle / HiRDB。',

  location: '示例城市',
  phone: '13800000000',
  email: 'your-email@example.com',
  github: 'https://github.com/your-github-username',

  skills: [
    { label: '编程语言', items: ['Java', 'COBOL', 'SQL', 'Shell'] },
    { label: 'Java 应用框架', items: ['企业内部级 Java 框架（脱敏）'] },
    { label: '数据库', items: ['Oracle', 'HiRDB', '表结构设计与评审', 'SQL 编写与调优', '数据迁移与转换'] },
    { label: '对日工程流程', items: ['詳細設計（仕様書）', '製造', '単体テスト', '結合テスト', '移行', '障害対応', 'WBS 管理', 'コードレビュー'] },
    { label: '语言能力', items: ['日语 JLPT N2（持证）', '中文（母语）'] },
  ],

  experience: [
    {
      role: '系统工程师（SE）',
      org: '示例科技有限公司',
      period: '2021.07 – 至今',
      highlights: [
        '参与保险业务域多个项目（脱敏），贯通详细设计→製造→単体/結合テスト→移行→障害対応的对日瀑布式全流程。',
        '基于《詳細設計書 / 仕様書》进行程序製造；承担代码评审与新人带教。',
        '技术覆盖 Java（客户内部框架）、COBOL 批处理、Shell 自动化，以及主流关系型数据库的表结构设计与数据迁移。',
      ],
    },
  ],

  projects: [
    {
      name: '示例项目 · 全栈 Web 应用（个人项目）',
      description: '脱敏后的示例项目描述。',
      tech: ['Vue 3', 'Vite', 'Node.js', 'Express', 'SQLite', 'Docker', 'Nginx', 'JWT'],
    },
    {
      name: '示例对日业务系统（脱敏）',
      description: '批处理（Batch）程序开发示例。',
      tech: ['Java', '企业内部框架', '主流数据库'],
    },
  ],

  education: [
    { school: '示例大学', degree: '本科', major: '网络工程', period: '2017.09 – 2021.06' },
  ],

  certifications: ['日本語能力試験 JLPT N2（持证）'],
};
