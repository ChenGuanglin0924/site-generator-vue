// 还是 node.js, 但使用更爽的方式：
import { IncomingMessage, ServerResponse } from 'http'
import MarkdownIt  from 'markdown-it';
import fs from 'fs';

const md = new MarkdownIt();

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  const file = fs.readFileSync('./public/md/亚米级数据.md', {encoding: 'utf-8'});
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.write(md.render(file))
  res.end();
}