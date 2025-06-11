export enum TaskType {
  // 启动浏览器
  LAUNCH_BROWSER = "LAUNCH_BROWSER",
  // 将页面转换为HTML
  PAGE_TO_HTML = "PAGE_TO_HTML",
  // 从元素中提取文本
  EXTRACT_TEXT_FROM_ELEMENT = "EXTRACT_TEXT_FROM_ELEMENT",
  // // 填充输入框
  // FILL_INPUT = "FILL_INPUT",
  // // 点击元素
  // CLICK_ELEMENT = "CLICK_ELEMENT",
  // // 等待元素出现
  // WAIT_FOR_ELEMENT = "WAIT_FOR_ELEMENT",
  // // 通过Webhook传递数据
  // DELIVER_VIA_WEBHOOK = "DELIVER_VIA_WEBHOOK",
  // // 使用AI提取数据
  // EXTRACT_DATA_WITH_AI = "EXTRACT_DATA_WITH_AI",
  // // 从JSON中读取属性
  // READ_PROPERTY_FROM_JSON = "READ_PROPERTY_FROM_JSON",
  // // 向JSON中添加属性
  // ADD_PROPERTY_TO_JSON = "ADD_PROPERTY_TO_JSON",
  // // 导航到URL
  // NAVIGATE_URL = "NAVIGATE_URL",
  // // 滚动到元素位置
  // SCROLL_TO_ELEMENT = "SCROLL_TO_ELEMENT",
}

export enum TaskParamType {
  // 字符串类型
  STRING = "STRING",
  // 浏览器实例
  BROWSER_INSTANCE = "BROWSER_INSTANCE",
  // 选择类型
  SELECT = "SELECT",
  // 凭证类型
  CREDENTIAL = "CREDENTIAL",
}

export interface TaskParam {
  name: string;
  type: TaskParamType;
  helperText?: string;
  required?: boolean;
  hideHandle?: boolean;
  value?: string;
  [key: string]: any;
}
