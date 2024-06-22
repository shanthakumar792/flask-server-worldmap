document.addEventListener('DOMContentLoaded', function () {
    var myChart = echarts.init(document.getElementById('main'));

    // Load external geoCoordMap
    var script = document.createElement('script');
    script.src = 'static/geoCoordMap.js';
    document.head.appendChild(script);

    // Wait for the geoCoordMap to be loaded
    script.onload = function () {
        // Specify the configuration items and data for the chart
        var option = {
            title: {
                text: 'Live Threat Map',
                left: 'center',
                textStyle: {
                    color: 'rgba(0, 255, 0, 0.8)',
                    fontSize: 24,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                name: 'Threats',
                type: 'map',
                map: 'world',
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#2c3e50',
                        borderColor: '#1abc9c',
                        borderWidth: 1,
                        shadowColor: 'rgba(0, 255, 0, 0.5)',
                        shadowBlur: 20
                    },
                    emphasis: {
                        areaColor: '#16a085',
                        borderColor: '#1abc9c',
                        borderWidth: 1,
                        shadowColor: 'rgba(0, 255, 0, 1)',
                        shadowBlur: 30,
                        label: { show: true }
                    }
                },
                label: {
                    normal: {
                        show: true,  // This makes the label visible
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.7)',  // Light color for the text
                            fontSize: 10,  // Adjust font size as needed
                            fontWeight: 'lighter'  // Making text lighter
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 1)'  // Brighter color on hover
                        }
                    }
                },                
                data: []
            }]
        };

        // Use the specified chart configuration items and data to show the chart
        myChart.setOption(option);

        // Resize the chart when the window is resized
        window.addEventListener('resize', function() {
            myChart.resize();
        });

        // WebSocket connection and event handling
        var socket = io();
        socket.on('connect', function() {
            console.log('Connected to server');
        });

        // Handle multiple new events simultaneously
        socket.on('new_events', function(data) {
            console.log('New events:', data);
            data.forEach(function(event) {
                var coords = geoCoordMap[event.country];
                if (coords) {
                    var pixelCoords = myChart.convertToPixel({ seriesIndex: 0 }, coords);
                    animateEvent(pixelCoords, event);
                } else {
                    console.error('Coordinates not found for country:', country);
                }
            });
        });        

        function animateEvent(startCoords, event) {
            var planeColor = getPlaneColor(event.ev_type);
            var contrailThickness = getContrailThickness(event);
        
            var plane = document.createElement('div');            
            plane.className = 'plane';
            plane.style.backgroundColor = planeColor;
        
            var startX = startCoords[0];
            var startY = startCoords[1];
            plane.style.left = startX + 'px';
            plane.style.top = startY + 'px';
        
            document.getElementById('main').appendChild(plane);
        
            var Devices = document.querySelectorAll('#client-devices .device');
            var randomIndex = Math.floor(Math.random() * Devices.length);
            var Device = Devices[randomIndex];
            var DevRect = Device.getBoundingClientRect();
        
            var DevX = DevRect.left;
            var DevY = DevRect.top;

            var infectedHosts = document.getElementById('infected-hosts-body')
            var infRect = infectedHosts.getBoundingClientRect();
            var infX = infRect.left;
            var infY = infRect.top;
        
            var duration = 500 + Math.random() * 5000;
        
            if (event.ev_type === 'clean') {
                movePlane1(plane, startX, startY, DevX, DevY, duration, contrailThickness);
                setTimeout(() => {
                    triggerSparkEffect1(Device);
                }, duration);
            } else if (event.ev_type === 'mw') {
                movePlane2(plane, startX, startY, DevX, DevY, infX, infY, duration, contrailThickness);
                setTimeout(() => {
                    triggerSparkEffect2(Device);
                }, duration);
            } else {
                // 'cc', 'eta', 'dns'
                movePlane3(plane, infX, infY, DevX, DevY, startX, startY, 500, contrailThickness);
                setTimeout(() => {
                    triggerSparkEffect2(Device);
                }, 500);
            }
        }
                
        function removeElement(element) {
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }

        function movePlaneBase(plane, startX, startY, endX, endY, duration, canvas, lineWidth=2) {
            var start = null;
            var ctx = canvas.getContext('2d');
            ctx.strokeStyle = plane.style.backgroundColor;
            ctx.setLineDash([]); // Ensure the line is solid
            ctx.lineWidth = lineWidth;
        
            var contrailPoints = []; // Array to store contrail path points
        
            function movePlane(timestamp) {
                if (!start) start = timestamp;
                var progress = (timestamp - start) / duration;
                var t = Math.min(progress, 1);
        
                var currentX = ellipticalBezier(startX, endX, t);
                var currentY = ellipticalBezier(startY, endY, t);
        
                plane.style.left = currentX + 'px';
                plane.style.top = currentY + 'px';
        
                contrailPoints.push({ x: currentX + 5, y: currentY + 5});
        
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                for (var i = 0; i < contrailPoints.length; i++) {
                    ctx.lineTo(contrailPoints[i].x, contrailPoints[i].y);
                }
                ctx.stroke();
        
                if (t < 1) {
                    requestAnimationFrame(movePlane);
                } else {
                    plane.style.left = endX + 'px';
                    plane.style.top = endY + 'px';
                    ctx.stroke()
                }
            }
            requestAnimationFrame(movePlane);
        }

        function movePlane1(plane, startX, startY, endX, endY, duration, lineWidth=2) {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = 'absolute';
            canvas.style.left = '0';
            canvas.style.top = '0';
            canvas.style.zIndex = '0';
            document.getElementById('main').appendChild(canvas);
        
            movePlaneBase(plane, startX, startY, endX, endY, duration, canvas, lineWidth);
            setTimeout(() => {
                removeElement(plane);
                removeElement(canvas);
            }, duration + 500);
        }


        function movePlane2(plane, startX, startY, midX, midY, endX, endY, duration, lineWidth=2) {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = 'absolute';
            canvas.style.left = '0';
            canvas.style.top = '0';
            canvas.style.zIndex = '0';
            document.getElementById('main').appendChild(canvas);
        
            movePlaneBase(plane, startX, startY, midX, midY, duration, canvas, lineWidth);
        
            setTimeout(() => {
                movePlaneBase(plane, midX, midY, endX, endY, duration * 0.5, canvas, lineWidth);
                setTimeout(() => {
                    removeElement(plane);
                    removeElement(canvas);
                }, duration);
            }, duration);
        }

        function movePlane3(plane, startX, startY, midX, midY, endX, endY, duration, lineWidth=2) {
            var canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = 'absolute';
            canvas.style.left = '0';
            canvas.style.top = '0';
            canvas.style.zIndex = '0';
            document.getElementById('main').appendChild(canvas);
        
            movePlaneBase(plane, startX, startY, midX, midY, duration, canvas, lineWidth);

            setTimeout(() => {                
                var ctx = canvas.getContext('2d');
                ctx.setLineDash([10, 5]);
                ctx.beginPath();
                ctx.moveTo(midX + 5, midY + 5);
                ctx.lineTo(endX, endY);
                ctx.stroke();                

                function flashLine(show) {
                    if (show) {
                        ctx.strokeStyle = plane.style.backgroundColor;
                    } else {
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
                    }
                    ctx.beginPath();
                    ctx.moveTo(midX + 5, midY + 5);
                    ctx.lineTo(endX, endY);
                    ctx.stroke();
                }
                
                let visible = true;
                const flashDuration = 500;
                var flashes = 10;
            
                const intervalId = setInterval(() => {
                    visible = !visible;
                    flashLine(visible);
                    if (--flashes <= 0) {
                        clearInterval(intervalId);
                    }
                }, flashDuration);                

                setTimeout(() => {
                    removeElement(plane);
                    removeElement(canvas);
                }, flashDuration);
            }, duration + 100);
        }
        
        
        function getPlaneColor(ev_type) {
            switch (ev_type) {
                case 'clean': return 'rgba(0, 255, 255, 100.5)';
                case 'mw': return 'rgb(255, 0, 0)';
                case 'cc': return 'rgb(255, 128, 0)';
                case 'eta': return 'rgb(255, 0, 255)';
                case 'dns': return 'rgb(255, 128, 255)';
                default: return 'rgb(128, 128, 128)';
            }
        }

        function getContrailThickness(event) {
            if (event.ev_type == 'clean') return 1;
            if (event.threat_level < 4) return 2;
            if (event.threat_level < 7) return 3;
            return 4;
        }

        // Bezier curve function for elliptical path
        function ellipticalBezier(start, end, t) {
            var cx = start + (end - start) * 0.5; // Control point X is at the midpoint
            var cy = Math.min(start, end) - 100; // Control point Y is above the start and end points

            // Elliptical Bezier curve formula (adjust as needed)
            return Math.pow(1 - t, 1.5) * start + 2 * (1 - t) * t * cx + Math.pow(t, 1.5) * end;
        }

        function triggerSparkEffect1(boxElement) {
            boxElement.classList.add('device-spark1');            
            setTimeout(() => {
                boxElement.classList.remove('device-spark1');
            }, 500);
        }
        function triggerSparkEffect2(boxElement) {
            boxElement.classList.add('device-spark2');            
            setTimeout(() => {
                boxElement.classList.remove('device-spark2');
            }, 500);
        }

    }
    
});
