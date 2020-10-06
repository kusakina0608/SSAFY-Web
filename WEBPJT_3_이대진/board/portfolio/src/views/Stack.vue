<template>
  <div>
            <section id="stack-part" class="sort-center" style="height: 100%;">
            <div class="h2 bg-primary p-4 text-white w-100 text-center">Skill Stack</div>
            <!-- Web -->
            <table class="table w-75 mt-5 ml-auto mr-auto">
                <thead>
                    <tr>
                        <th scope="col">분야</th>
                        <th scope="col">분류</th>
                        <th scope="col">스택</th>
                        <th scope="col">Level</th>
                        <th scope="col">근거</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Frontend -->
                    <tr>
                        <th scope="row" rowspan="11" class="align-middle">Web</th>
                        <td rowspan="4" class="align-middle">Frontend</td>
                        <td>HTML/CSS</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>웹페이지 클론 코딩 가능</td>
                    </tr>
                    <tr>
                        <td>Bootstrap</td>
                        <td>⭐⭐⭐</td>
                        <td>Bootstrap 5 기준으로 Document 참고하여 개발 가능</td>
                    </tr>
                    <tr>
                        <td>Vue.js</td>
                        <td>⭐⭐</td>
                        <td>Web Project 개발 경험 보유</td>
                    </tr>
                    <tr>
                        <td>React.js</td>
                        <td>⭐</td>
                        <td>Document 참고하여 개발 가능</td>
                    </tr>
                    <!-- Backend -->
                    <tr>
                        <td rowspan="4" class="align-middle">Backend</td>
                        <td>Node.js</td>
                        <td>⭐⭐⭐</td>
                        <td>비동기 통신 / REST / Web Server 개발 및 운영</td>
                    </tr>
                    <tr>
                        <td>MySQL</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>MySQL / MariaDB를 사용한 다수의 프로젝트 경험 보유</td>
                    </tr>
                    <tr>
                        <td>Mongo DB</td>
                        <td>학습 예정</td>
                        <td>Node.js + Mongo DB 프로젝트 진행 예정</td>
                    </tr>
                    <tr>
                        <td>Spring Framework</td>
                        <td>⭐⭐⭐</td>
                        <td>프레임워크 구조에 대한 이해 및 프로젝트 경험 보유</td>
                    </tr>
                    <!-- DevOps -->
                    <tr>
                        <td rowspan="3" class="align-middle">DevOps</td>
                        <td>AWS</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>EC2 Instance를 사용하여 LAMP Stack 구축 및 서버 운영 경험 보유, 다양한 AWS 교육 프로그램 이수</td>
                    </tr>
                    <tr>
                        <td>Nginx</td>
                        <td>⭐</td>
                        <td>웹 서버 운영</td>
                    </tr>
                    <tr>
                        <td>Jenkins</td>
                        <td>⭐</td>
                        <td>배포 서버 운영</td>
                    </tr>
                </tbody>
            </table>
            <!-- Embedded -->
            <table class="table w-75 mt-5 ml-auto mr-auto">
                <thead>
                    <tr>
                        <th scope="col">분야</th>
                        <th scope="col">분류</th>
                        <th scope="col">스택</th>
                        <th scope="col">Level</th>
                        <th scope="col">근거</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="12" class="align-middle">Embedded</th>
                        <td rowspan="3" class="align-middle">Firmware</td>
                        <td>ARM</td>
                        <td>⭐⭐⭐⭐</td>
                        <td>Cortext-M3/A7 아키텍쳐 이해 및 개발 경험 보유</td>
                    </tr>
                    <tr>
                        <td>Raspberry pi</td>
                        <td>⭐⭐⭐⭐⭐</td>
                        <td>Raspberry pi에서 C와 Python으로 Firmware 개발 경험 보유</td>
                    </tr>
                    <tr>
                        <td>NUCLEO-F103RB</td>
                        <td>학습 예정</td>
                        <td>ST사 보드 개발(Cortex-M3) 진행 예정</td>
                    </tr>
                    <tr>
                        <td class="align-middle">RTOS</td>
                        <td>FreeRTOS</td>
                        <td>⭐⭐</td>
                        <td>Thread Programming / 모듈 제어 가능</td>
                    </tr>
                    <tr>
                        <td rowspan="3" class="align-middle">장비</td>
                        <td>회로도 이해</td>
                        <td>⭐⭐⭐</td>
                        <td>Datasheet / Schematic 분석 가능</td>
                    </tr>
                    <tr>
                        <td>기본 계측</td>
                        <td>⭐</td>
                        <td>멀티미터 / 오실로스코프 경험 보유</td>
                    </tr>
                    <tr>
                        <td>Debugger</td>
                        <td>학습 예정</td>
                        <td>ST-Link / V2, IAR 환경에서 디버깅</td>
                    </tr>
                    <!--  -->
                    <tr>
                        <td rowspan="2" class="align-middle">Device Driver</td>
                        <td>Linux Kernel</td>
                        <td>⭐⭐⭐</td>
                        <td>자유롭게 사용 가능, Linux 커널 분석 경험 보유</td>
                    </tr>
                    <tr>
                        <td>Linux Device Driver</td>
                        <td>⭐</td>
                        <td>Device Tree / 캐릭터 Device Driver 개발 경험 보유</td>
                    </tr>
                    <tr>
                        <td class="align-middle">Embedded UI</td>
                        <td>Qt</td>
                        <td>⭐⭐⭐</td>
                        <td>C++ 대신, Python으로 개발(PyQt)</td>
                    </tr>
                    <tr>
                        <td rowspan="2" class="align-middle">IoT</td>
                        <td>Connectivity</td>
                        <td>⭐⭐⭐</td>
                        <td>MQTT, LoRa, BLE, Wifi</td>
                    </tr>
                    <tr>
                        <td>Security</td>
                        <td>⭐</td>
                        <td>SSL/TLS</td>
                    </tr>
                </tbody>
            </table>
        </section>
  </div>
</template>
