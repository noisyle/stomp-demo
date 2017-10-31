检出代码
git clone git@github.com:noisyle/stomp-demo.git

更新代码
git pull

安装依赖
cd stomp-demo-front
cnpm install

编译前端代码
npm run build

编译docker镜像
docker build -t noisyle/stomp-demo-front .

运行docker镜像(本例将nginx的80端口映射到宿主机8080端口，注意防火墙设置)
docker run -d -p 80:80 noisyle/stomp-demo-front
