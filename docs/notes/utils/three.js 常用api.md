
# three.js 常用api

```javascript
/**
 * 场景（scene）
 */
var scene = new THREE.Scene(); // 创建场景
scene.add(x);                  // 插入场景
/**
 * 相机（camera）
 */
// 正交投影相机
var camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
// 透视头像相机
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // fov：人眼夹角，aspect：长宽比
/**
 * 渲染器（renderer）
 */
var renderer = new THREE.WebGLRenderer(options);
// options {} 可选。参数：
// canvas：element <canvas></canvas>
renderer.setSize(长, 宽);
element.appendChild(renderer.domElement); // 插入节点
renderer.setClearColor(color, opacity);   // 设置清除后的颜色 16进制
renderer.clear();                         // 清除面板
renderer.render(scene, camera);           // 渲染
/**
 * 光照(light)
 */
new THREE.AmbientLight(颜色);                          // 环境光
new THREE.PointLight(颜色, 强度, 距离);                // 点光源
new THREE.DirectionalLight(颜色, 亮度);                // 平行光
new THREE.SpotLight(颜色, 强度, 距离, 夹角, 衰减指数); // 聚光灯
/**
 * 几何形状
 */
new THREE.CubeGeometry(长, 宽, 高, 长的分割, 宽的分割, 高的分割);                           // 立方体
new THREE.PlanGeometry(长,宽, 长的分割, 宽的分割);                                          // 平面
new THREE.SphereGeometry(半径, 经度切片, 纬度分割, 经度分割, 经度跨过, 纬度开始, 纬度跨过); // 球体
new THREE.CircleGeometry(半径, 切片数, 开始, 跨过角度);                                     // 圆形
new THREE.CylinderGeometry(顶部面积, 底部面积, 高, 圆分割, 高分割, 是否没有顶面和底面);     // 圆台
new THREE.TetrahedronGeometry(半径, 细节);  // 正四边形
new THREE.OctahedronGeometry(半径, 细节);   // 正八边形
new THREE.IconsahedronGeometry(半径, 细节); // 正十二边形
new THREE.TorusGeometry(半径, 管道半径, 纬度分割, 经度分割, 圆环面的弧度); // 圆环面
// 自定义形状
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vectory3(x, y, z)); // 点，其中x、y、z为坐标
geometry.faces.push(new THREE.Faces3(x, y, z));      // 面，其中x、y、z为点的数组的索引，三点确定一个面
/**
 * 材质
 */
new THREE.MeshBasicMaterial(options); // 基本材质
// options {} 可选。参数：
//   visible：是否可见
//     color：颜色
// wireframe: 是否渲染线而非面
//      side：THREE.FrontSide 正面，THREE.BackSide 反面，THREE.DoubleSide 双面
//       map: 贴图
new THREE.MeshLambertMaterial(options); // Lambert材质，适合光照
//  ambient：反射能力
// emissive：自发光颜色
new THREE.MeshPhongMaterial();  // Phong材质，适合金属和镜面
//  specular：指定该材质的光亮程度及其高光部分的颜色，如果设置成和color属性相同的颜色，则会得到另一个更加类似金属的材质，如果设置成grey灰色，则看起来像塑料
// shininess：光斑大小（值越大，光斑越小）
// alphaTest: 透明度
new THREE.MeshDepthMaterial()：//根据网格到相机的距离，该材质决定如何给网格染色
new THREE.MeshNormalMaterial()：//方向材质，根据物体表面的法向量计算颜色
new THREE.MeshFaceMaterial() // 设置不同面的贴图，参数为单个贴图的数组
/**
 * 贴图
 */
var texture = new THREE.TextureLoader().load(url);
texture.wrapS texture.wrapT = THREE.RepeatWrapping // 贴图的重复方式
texture.repeat.set(x, y)     // 重复次数
new THREE.texture(canvas)    // 将canvas作为贴图
/**
 * 模型贴图结合
 */
var mesh = new THREE.Mesh(形状, 材质);
mesh.position // 位置 mesh.position.x（y、z） 或 mesh.position.set(x, y, z)
mesh.scale    // 缩放
mesh.rotation // 旋转
/**
 * 状态监视PFS
 */
var stats = new Stats();
stats.domElement // 节点
stats.begin()    // 开始
stats.end()      // 结束
```
