import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.CDhRSyRB.js";const y=JSON.parse('{"title":"byeefree : 适用于RK3588S2计算板及地面站的任务软件集合","description":"","frontmatter":{},"headers":[],"relativePath":"src/aircraft/ch4-byeefree/index.md","filePath":"src/aircraft/ch4-byeefree/index.md"}'),p={name:"src/aircraft/ch4-byeefree/index.md"};function e(h,s,k,t,r,F){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="byeefree-适用于rk3588s2计算板及地面站的任务软件集合" tabindex="-1">byeefree : 适用于RK3588S2计算板及地面站的任务软件集合 <a class="header-anchor" href="#byeefree-适用于rk3588s2计算板及地面站的任务软件集合" aria-label="Permalink to &quot;byeefree : 适用于RK3588S2计算板及地面站的任务软件集合&quot;">​</a></h1><ul><li>支持一键安装及运行, 无需互联网连接. 提供<code>byeefree</code>命令, 可以一键启动无人机任务.</li></ul><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><h3 id="编译-安装" tabindex="-1">编译&amp;安装 <a class="header-anchor" href="#编译-安装" aria-label="Permalink to &quot;编译&amp;安装&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装编译工具</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo apt install -y rustup</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rustup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toolchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nightly</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo-zigbuild</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rustup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aarch64-unknown-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rustup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aarch64-apple-darwin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第一步: 编译主程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo-zigbuild</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> byeefree</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aarch64-unknown-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo-zigbuild</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> byeefree</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aarch64-apple-darwin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第二步: 编译安装器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo-zigbuild</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aarch64-unknown-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第三步: 上传文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rsync</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -avz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --partial</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --progress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Users/workspace/Desktop/projects/ByeIO/software/exp226-rust-byeefree/target/aarch64-unknown-linux-gnu/release/installer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qsbye@192.168.30.33:/home/qsbye</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./installer</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第四步: 测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="byeefree命令行" tabindex="-1">byeefree命令行 <a class="header-anchor" href="#byeefree命令行" aria-label="Permalink to &quot;byeefree命令行&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 机器人框架</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rosette</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可视化界面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rosette</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webviz</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mosh远程连接工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mosh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># rsync文件同步工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsync</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装/卸载服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用ubuntu运行某些难以编译为wasm的程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;uname -r&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录账户(使用sm4-key)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> account</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;qsbye&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注册帐户: 自动生成私钥并保存到/tmp/_ByeIO_目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> account</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> register</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;qsbye&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看系统cpu及内存占用率</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysinfo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打印usb设备(类似adb device)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置本机的角色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> air</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 空中 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">byeefree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> util</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ground</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 地面站</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="byeefree系统启动顺序" tabindex="-1">byeefree系统启动顺序 <a class="header-anchor" href="#byeefree系统启动顺序" aria-label="Permalink to &quot;byeefree系统启动顺序&quot;">​</a></h3><ol><li>解压并复制文件</li><li>启动byeefree守护进程</li><li>启动rosette_core守护进程</li><li>启动SLAM、执行器、目标检测器</li><li>等待任务指令</li></ol><h3 id="虚拟网卡" tabindex="-1">虚拟网卡 <a class="header-anchor" href="#虚拟网卡" aria-label="Permalink to &quot;虚拟网卡&quot;">​</a></h3><p>将esp32点对点透传的数据封装为udp/tcp并通过linux TAP虚拟网卡模拟为网卡, 然后就可以使用:<code>byeefree mosh qsbye@[ip地址]</code>来连接机载计算机了.</p><h2 id="开发说明" tabindex="-1">开发说明 <a class="header-anchor" href="#开发说明" aria-label="Permalink to &quot;开发说明&quot;">​</a></h2><p>推荐使用nightly通道的1.85版本rustc编译.过高版本或过低版本都不能保证兼容性.</p><h3 id="项目目录" tabindex="-1">项目目录 <a class="header-anchor" href="#项目目录" aria-label="Permalink to &quot;项目目录&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .cargo文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 编译器配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assets文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> examples文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 例程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> result文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 代码运行输出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 主要代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> static文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 魔改的第三方库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> target文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 编译结果</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 所有的第三方库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">问题记录</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">文件夹</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 问题问答</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> build.rs </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编译前处理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> build.sh </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编译命令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Cargo.toml </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 项目配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clippy.toml </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 代码风格设定</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LICENSE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 代码开源许可</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> README.md </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明书</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rust-toolchain.toml </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编译器配置</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="代码目录说明" tabindex="-1">代码目录说明 <a class="header-anchor" href="#代码目录说明" aria-label="Permalink to &quot;代码目录说明&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> byeefree.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> byeefree-cli命令行工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installer.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 服务安装程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_a.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> A节点专用代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_b.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> B节点专用代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> byeefree_cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="例程说明" tabindex="-1">例程说明 <a class="header-anchor" href="#例程说明" aria-label="Permalink to &quot;例程说明&quot;">​</a></h3><p><strong>文件夹: examples/</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clap_byeefree.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 命令行程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create_user_group.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 创建系统用户和用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> database_login.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 数据库+登录用户账户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> database_sql.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 数据库基本操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> embed_file.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 内嵌二进制文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log_file_service.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 写入当前时间到日志</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nusb_attach.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用nusb连接usb设备</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nusb_control.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用nusb控制usb设备端点</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read_write_usb_cdc.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用nusb读写usb-cdc-acm虚拟串口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service_installer.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 自动安装系统服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sm4_encrypt.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SM4加密解密</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sm9_encrypy.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SM9加密解密</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysinfo_cpu_mem.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 查看系统CPU占用率及内存使用情况</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tap_interface.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用TAP虚拟网卡接口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tap_tcp_udp_bridge.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 虚拟网桥桥接tcp,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tap_virtual_net.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TAP虚拟网桥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tempfile.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 创建临时文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udp_base64.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udp包使用base64编码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udp_tcp_multi_package.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分包传输超过MTU的tcp和udp包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usb_descriptor.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用nusb获取usb设备描述符</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wasmtime_ubuntu.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用wasmtime运行ubuntu系统</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wasmtime_yosys.rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用wasmtime运行yosys工具</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,20)]))}const g=i(p,[["render",e]]);export{y as __pageData,g as default};
