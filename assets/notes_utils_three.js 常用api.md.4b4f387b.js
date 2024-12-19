import{_ as s,o as n,c as a,U as l}from"./chunks/framework.316ef557.js";const i=JSON.parse('{"title":"three.js 常用api","description":"","frontmatter":{},"headers":[],"relativePath":"notes/utils/three.js 常用api.md","filePath":"notes/utils/three.js 常用api.md","lastUpdated":1689776313000}'),p={name:"notes/utils/three.js 常用api.md"},o=l(`<h1 id="three-js-常用api" tabindex="-1">three.js 常用api <a class="header-anchor" href="#three-js-常用api" aria-label="Permalink to &quot;three.js 常用api&quot;">​</a></h1><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 场景（scene）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 创建场景</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(x)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;">// 插入场景</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 相机（camera）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 正交投影相机</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> camera </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">OrthographicCamera</span><span style="color:#A6ACCD;">(left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bottom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> near</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> far)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 透视头像相机</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> camera </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PerspectiveCamera</span><span style="color:#A6ACCD;">(fov</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> aspect</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> near</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> far)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// fov：人眼夹角，aspect：长宽比</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 渲染器（renderer）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> renderer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WebGLRenderer</span><span style="color:#A6ACCD;">(options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// options {} 可选。参数：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// canvas：element &lt;canvas&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">(长</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 宽)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 插入节点</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setClearColor</span><span style="color:#A6ACCD;">(color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> opacity)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 设置清除后的颜色 16进制</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                         </span><span style="color:#676E95;font-style:italic;">// 清除面板</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> camera)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;">// 渲染</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 光照(light)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AmbientLight</span><span style="color:#A6ACCD;">(颜色)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                          </span><span style="color:#676E95;font-style:italic;">// 环境光</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PointLight</span><span style="color:#A6ACCD;">(颜色</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 强度</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 距离)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;">// 点光源</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DirectionalLight</span><span style="color:#A6ACCD;">(颜色</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 亮度)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;">// 平行光</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SpotLight</span><span style="color:#A6ACCD;">(颜色</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 强度</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 距离</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 夹角</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 衰减指数)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 聚光灯</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 几何形状</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CubeGeometry</span><span style="color:#A6ACCD;">(长</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 宽</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 高</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 长的分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 宽的分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 高的分割)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                           </span><span style="color:#676E95;font-style:italic;">// 立方体</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PlanGeometry</span><span style="color:#A6ACCD;">(长</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">宽</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 长的分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 宽的分割)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                                          </span><span style="color:#676E95;font-style:italic;">// 平面</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SphereGeometry</span><span style="color:#A6ACCD;">(半径</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 经度切片</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 纬度分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 经度分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 经度跨过</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 纬度开始</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 纬度跨过)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 球体</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CircleGeometry</span><span style="color:#A6ACCD;">(半径</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 切片数</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 开始</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 跨过角度)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">                                     </span><span style="color:#676E95;font-style:italic;">// 圆形</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CylinderGeometry</span><span style="color:#A6ACCD;">(顶部面积</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 底部面积</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 高</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 圆分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 高分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 是否没有顶面和底面)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 圆台</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TetrahedronGeometry</span><span style="color:#A6ACCD;">(半径</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 细节)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 正四边形</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">OctahedronGeometry</span><span style="color:#A6ACCD;">(半径</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 细节)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 正八边形</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IconsahedronGeometry</span><span style="color:#A6ACCD;">(半径</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 细节)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 正十二边形</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TorusGeometry</span><span style="color:#A6ACCD;">(半径</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 管道半径</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 纬度分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 经度分割</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 圆环面的弧度)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 圆环面</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 自定义形状</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> geometry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Geometry</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vertices</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vectory3</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> z))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 点，其中x、y、z为坐标</span></span>
<span class="line"><span style="color:#A6ACCD;">geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">faces</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Faces3</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> z))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// 面，其中x、y、z为点的数组的索引，三点确定一个面</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 材质</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshBasicMaterial</span><span style="color:#A6ACCD;">(options)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 基本材质</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// options {} 可选。参数：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   visible：是否可见</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     color：颜色</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// wireframe: 是否渲染线而非面</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//      side：THREE.FrontSide 正面，THREE.BackSide 反面，THREE.DoubleSide 双面</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       map: 贴图</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshLambertMaterial</span><span style="color:#A6ACCD;">(options)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Lambert材质，适合光照</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  ambient：反射能力</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// emissive：自发光颜色</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshPhongMaterial</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// Phong材质，适合金属和镜面</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  specular：指定该材质的光亮程度及其高光部分的颜色，如果设置成和color属性相同的颜色，则会得到另一个更加类似金属的材质，如果设置成grey灰色，则看起来像塑料</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// shininess：光斑大小（值越大，光斑越小）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// alphaTest: 透明度</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshDepthMaterial</span><span style="color:#A6ACCD;">()：</span><span style="color:#676E95;font-style:italic;">//根据网格到相机的距离，该材质决定如何给网格染色</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshNormalMaterial</span><span style="color:#A6ACCD;">()：</span><span style="color:#676E95;font-style:italic;">//方向材质，根据物体表面的法向量计算颜色</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshFaceMaterial</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 设置不同面的贴图，参数为单个贴图的数组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 贴图</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> texture </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TextureLoader</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(url)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wrapS texture</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wrapT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">RepeatWrapping </span><span style="color:#676E95;font-style:italic;">// 贴图的重复方式</span></span>
<span class="line"><span style="color:#A6ACCD;">texture</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">repeat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y)     </span><span style="color:#676E95;font-style:italic;">// 重复次数</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">texture</span><span style="color:#A6ACCD;">(canvas)    </span><span style="color:#676E95;font-style:italic;">// 将canvas作为贴图</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 模型贴图结合</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> mesh </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#A6ACCD;">(形状</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 材质)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mesh</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position </span><span style="color:#676E95;font-style:italic;">// 位置 mesh.position.x（y、z） 或 mesh.position.set(x, y, z)</span></span>
<span class="line"><span style="color:#A6ACCD;">mesh</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scale    </span><span style="color:#676E95;font-style:italic;">// 缩放</span></span>
<span class="line"><span style="color:#A6ACCD;">mesh</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation </span><span style="color:#676E95;font-style:italic;">// 旋转</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 状态监视PFS</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> stats </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Stats</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">stats</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement </span><span style="color:#676E95;font-style:italic;">// 节点</span></span>
<span class="line"><span style="color:#A6ACCD;">stats</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#A6ACCD;">()    </span><span style="color:#676E95;font-style:italic;">// 开始</span></span>
<span class="line"><span style="color:#A6ACCD;">stats</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#A6ACCD;">()      </span><span style="color:#676E95;font-style:italic;">// 结束</span></span></code></pre></div>`,2),e=[o];function t(c,r,y,D,A,F){return n(),a("div",null,e)}const E=s(p,[["render",t]]);export{i as __pageData,E as default};
