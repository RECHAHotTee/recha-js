/**
 * 模版引擎
 * 简单的 JavaScript 模板替换引擎
 * 涉及知识点：
 * 1. 字符串处理
 * 2. 正则表达式
 * 3. 数据结构
 */

// 函数
function render(template, data) {
  // 找出模版字符串 '{{ value }}'
  const regex = /\{\{([\w\.\[\]]+)\}\}/g;
  const matches = template.match(regex);
  
  // 替换模版字符串 '{{ value }} => value'
  for (let i = 0; i < matches.length; i++) {
    const path = matches[i].replace('{{', '').replace('}}', '');
    const value = eval(`data.${path}`);
    
    template = template.replace(matches[i], value);
  }
  
  return template;
}

// 示例
const template = '<div>{{user.name}}</div><div>{{user.age}}</div>';
const data = { user: { name: 'John', age: 30 } };

const result = render(template, data);

console.log(result); // <div>John</div><div>30</div>
