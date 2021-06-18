import React,{useRef,useEffect} from 'react'

export default function About() {
    useEffect(() => {
     const get = document.querySelector(".AboutMe")
     console.log(get);
    }, [])
    
    return (
        <section className="About" >
            <h1> About me </h1>
            <article className="Info" >
                <div >
                  <h4>Intro</h4>
                  <p> Hello my name is Jorge San Juan, I come from Houston, Texas and born into a beautiful and full of culture Mexican family.</p>
                </div>
                <div>
                  <h4>Story</h4>
                  <p>I got into Web Development when I was a kid playing a game about creating your own game with LUA code called Roblox. I created a few simple games and got kinda deep into it. When it was time to pick what I wanted to do as a living I browsed through back-end, game development and security, but decided to do front-end to the fact of the amount of creativity and</p>
                </div>
                <div>
                  <h4>Goals</h4>
                  <p>I wish to get a job as a Frontend Web Developer to eventually become a full stack, but I’m taking it step by step.</p>
                </div>

            </article>

            <svg className="AboutMe"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1570 950" preserveAspectRatio="xMinYMax meet" >
            <path fill="white" stroke="black" stroke-width="3"
            d="M -4.00,734.00
           C -4.00,734.00 22.28,748.09 48.00,769.00
             66.07,783.69 78.73,807.43 104.00,807.50
             126.75,807.56 136.01,776.44 162.67,761.33
             183.04,749.79 211.35,776.03 239.00,788.00
             260.42,797.27 277.27,853.94 297.50,854.00
             325.99,854.08 346.80,771.37 377.00,759.00
             397.48,750.61 424.74,779.94 449.00,776.00
             469.93,772.60 487.87,735.35 506.22,735.40
             533.03,735.47 560.20,799.93 587.00,800.00
             614.26,800.07 641.16,735.77 667.87,735.84
             700.35,735.93 732.23,799.92 763.00,800.00
             801.90,800.11 839.02,736.31 873.41,736.40
             890.80,736.45 907.47,770.62 923.33,770.67
             937.40,770.71 949.35,803.20 962.00,803.33
             981.63,803.54 1000.90,770.70 1016.67,764.67
             1027.40,760.56 1037.28,736.85 1045.94,736.87
             1052.70,736.89 1058.61,751.32 1064.00,751.33
             1069.00,751.34 1115.96,789.02 1173.00,788.00
             1189.59,787.70 1207.94,801.50 1227.09,817.30
             1289.99,679.60 1290.27,872.84 1321.00,859.00
             1353.34,844.44 1383.09,745.68 1415.04,745.09
             1506.00,822.00 1580.00,742.00 1580.00,742.00
             1580.00,742.00 1590.00,958.00 1590.00,958.00
             1590.00,958.00 -4.00,963.50 -4.00,963.50
             -4.00,963.50 -4.00,734.00 -4.00,734.00 Z" />
             <path id="Path"
        fill="none" stroke="black" stroke-width="1"
        d="M 95.07,268.18
           C 96.85,269.08 98.39,270.39 99.71,272.09
             101.03,273.79 101.90,275.72 102.31,277.91
             102.74,280.32 102.76,282.84 102.37,285.46
             102.02,288.00 101.03,290.94 99.43,294.18
             97.79,297.54 95.97,300.46 93.99,302.94
             92.04,305.38 89.79,307.64 87.15,309.94
             87.15,309.94 79.21,306.18 79.21,306.18
             79.21,306.18 79.44,305.70 79.44,305.70
             82.64,304.20 85.49,302.23 88.11,299.59
             90.77,296.87 92.74,294.21 94.08,291.46
             96.05,287.47 96.86,284.10 96.52,281.30
             96.23,278.37 94.94,276.32 92.62,275.15
             90.59,274.13 88.83,273.92 87.34,274.50
             85.85,275.08 84.31,276.28 82.76,278.04
             81.55,279.45 80.33,281.07 79.10,282.90
             77.89,284.69 76.61,286.45 75.20,288.30
             72.21,292.28 69.21,294.74 66.17,295.71
             63.05,296.83 59.80,296.59 56.43,295.00
             52.57,293.16 50.24,289.88 49.40,285.32
             48.59,280.67 49.58,275.49 52.12,270.28
             53.88,266.70 55.76,263.73 57.76,261.29
             59.89,258.64 62.00,256.39 64.04,254.68
             64.04,254.68 71.45,258.45 71.45,258.45
             71.45,258.45 71.23,258.88 71.23,258.88
             68.74,259.95 66.19,261.84 63.61,264.44
             61.16,266.82 59.10,269.68 57.48,272.97
             55.81,276.40 55.14,279.47 55.43,282.30
             55.71,285.14 56.93,287.04 59.04,288.05
             60.96,288.97 62.72,289.16 64.33,288.62
             65.93,288.09 67.69,286.57 69.56,284.21
             70.49,283.04 71.78,281.28 73.47,278.88
             75.18,276.43 76.67,274.50 77.93,273.05
             80.64,269.87 83.40,267.78 86.15,266.86
             88.83,266.08 91.81,266.51 95.07,268.18 Z
           M 112.55,225.80
           C 117.96,228.81 121.32,232.79 122.81,237.51
             124.42,242.02 123.91,246.69 121.20,251.71
             118.61,256.57 114.90,259.78 110.16,261.11
             105.51,262.32 100.44,261.51 94.96,258.66
             89.47,255.81 85.90,252.12 84.21,247.59
             82.66,242.83 83.30,237.78 85.93,232.84
             88.77,227.58 92.45,224.59 97.12,223.50
             101.96,222.12 107.16,222.80 112.55,225.80 Z
           M 109.09,232.13
           C 104.93,229.86 101.37,229.03 98.42,229.63
             95.46,230.24 93.03,232.32 91.22,235.67
             89.50,238.91 89.21,241.90 90.25,244.85
             91.30,247.81 93.93,250.37 98.13,252.57
             102.19,254.70 105.75,255.39 108.83,254.65
             111.89,253.92 114.23,252.04 115.91,248.88
             117.65,245.65 118.00,242.56 116.88,239.71
             115.75,236.87 113.15,234.34 109.09,232.13 Z
           M 135.38,186.07
           C 138.08,187.71 140.28,189.58 141.98,191.67
             143.67,193.75 144.86,195.88 145.54,198.07
             146.22,200.39 146.44,202.61 146.10,204.89
             145.70,207.31 144.92,209.51 143.75,211.51
             142.55,213.53 141.24,215.28 139.93,216.54
             138.68,217.69 137.30,218.74 135.77,219.67
             135.77,219.67 137.14,220.93 137.14,220.93
             137.14,220.93 134.15,226.14 134.15,226.14
             134.15,226.14 87.32,199.26 87.32,199.26
             87.32,199.26 90.52,193.69 90.52,193.69
             90.52,193.69 107.87,203.65 107.87,203.65
             107.50,201.36 107.40,199.10 107.62,196.85
             108.08,194.16 109.08,191.55 110.37,189.37
             113.15,184.68 116.60,182.30 120.89,181.86
             125.19,181.41 130.02,182.81 135.38,186.07 Z
           M 131.94,191.73
           C 128.09,189.40 124.78,188.27 122.01,188.36
             119.08,188.72 116.49,190.78 114.74,193.76
             113.73,195.47 112.88,197.71 112.42,200.12
             112.16,202.17 112.17,204.22 112.44,206.27
             112.44,206.27 131.14,217.01 131.14,217.01
             132.75,215.84 134.02,214.76 134.94,213.77
             135.90,212.73 136.90,211.31 137.88,209.64
             139.73,206.51 140.30,203.27 139.57,200.02
             138.70,197.02 136.14,194.28 131.94,191.73 Z
           M 145.63,148.12
           C 145.63,148.12 145.44,148.41 145.44,148.41
             144.55,149.10 143.67,149.96 142.89,150.85
             142.12,151.75 141.32,152.86 140.64,153.90
             139.57,155.56 138.91,157.41 138.65,159.43
             138.38,161.46 138.38,163.57 138.63,165.77
             138.63,165.77 161.52,180.55 161.52,180.55
             161.52,180.55 157.67,186.63 157.67,186.63
             157.67,186.63 125.45,166.49 125.45,166.49
             125.45,166.49 129.60,159.93 129.60,159.93
             129.60,159.93 134.31,162.98 134.31,162.98
             133.99,159.73 133.99,157.05 134.34,154.96
             134.68,152.86 135.40,150.96 136.55,149.18
             137.36,147.92 137.98,147.03 138.40,146.51
             138.81,145.99 139.45,145.22 140.14,144.46
             140.14,144.46 145.63,148.12 145.63,148.12 Z
           M 180.47,121.20
           C 180.47,121.20 162.72,146.06 162.72,146.06
             164.56,147.33 166.35,148.14 168.12,148.50
             169.88,148.86 171.54,148.83 173.12,148.42
             174.63,148.04 176.07,147.33 177.42,146.29
             178.78,145.24 180.25,143.56 181.69,141.54
             183.28,139.34 184.57,136.77 185.76,133.63
             186.66,130.89 187.07,128.86 187.04,127.44
             187.04,127.44 187.25,127.17 187.25,127.17
             187.25,127.17 192.76,131.26 192.76,131.26
             192.17,133.52 191.45,135.75 190.45,138.11
             189.33,140.67 188.12,142.87 186.63,144.95
             182.51,150.85 178.29,153.95 173.45,154.94
             168.30,156.41 163.04,155.54 157.80,152.05
             152.62,148.60 149.76,143.98 149.15,138.41
             148.08,133.53 149.12,128.80 152.77,123.53
             156.25,118.68 160.52,115.40 164.78,114.76
             168.87,114.33 173.17,115.77 177.65,119.10
             177.65,119.10 180.47,121.20 180.47,121.20 Z
           M 172.73,123.23
           C 169.90,121.17 167.06,120.46 164.19,121.13
             161.37,121.77 159.10,123.28 156.58,126.81
             154.25,130.18 153.56,133.04 154.13,135.91
             154.70,138.79 156.19,141.22 158.61,143.22
             158.61,143.22 172.73,123.23 172.73,123.23 Z
           M 249.36,65.68
           C 249.36,65.68 244.45,71.19 244.45,71.19
             244.45,71.19 211.42,42.22 211.42,42.22
             211.42,42.22 224.19,73.09 224.19,73.09
             224.19,73.09 221.49,76.24 221.49,76.24
             221.49,76.24 188.93,68.46 188.93,68.46
             188.93,68.46 222.66,96.63 222.66,96.63
             222.66,96.63 218.22,102.01 218.22,102.01
             218.22,102.01 178.67,69.81 178.67,69.81
             178.67,69.81 185.38,61.70 185.38,61.70
             185.38,61.70 216.57,68.80 216.57,68.80
             216.57,68.80 204.38,39.54 204.38,39.54
             204.38,39.54 211.40,31.62 211.40,31.62
             211.40,31.62 249.36,65.68 249.36,65.68 Z
           M 231.49,20.07
           C 231.49,20.07 226.02,25.97 226.02,25.97
             226.02,25.97 220.86,21.23 220.86,21.23
             220.86,21.23 226.38,15.29 226.38,15.29
             226.38,15.29 231.49,20.07 231.49,20.07 Z
           M 263.36,50.41
           C 263.36,50.41 258.71,55.42 258.71,55.42
             258.71,55.42 230.74,29.69 230.74,29.69
             230.74,29.69 235.59,24.47 235.59,24.47
             235.59,24.47 263.36,50.41 263.36,50.41 Z
           M -10.50,750.00" />
           <path id="Path #1"
        fill="none" stroke="black" stroke-width="1"
        d="M 1464.01,886.31
           C 1466.24,888.31 1467.83,890.61 1468.78,893.20
             1469.73,895.79 1469.99,898.34 1469.55,900.84
             1469.26,902.57 1468.65,904.27 1467.73,905.92
             1466.81,907.56 1465.35,909.49 1463.35,911.73
             1463.35,911.73 1457.83,917.88 1457.83,917.88
             1457.83,917.88 1433.25,895.87 1433.25,895.87
             1433.25,895.87 1438.70,889.78 1438.70,889.78
             1440.83,887.40 1442.70,885.66 1444.30,884.58
             1445.90,883.49 1447.44,882.72 1448.91,882.29
             1451.45,881.57 1454.00,881.53 1456.56,882.16
             1459.14,882.78 1461.62,884.17 1464.01,886.31 Z
           M 1460.93,889.65
           C 1459.03,887.96 1457.14,886.86 1455.25,886.37
             1453.36,885.87 1451.45,885.95 1449.52,886.61
             1448.12,887.08 1446.83,887.76 1445.65,888.66
             1444.47,889.55 1443.21,890.75 1441.86,892.25
             1441.86,892.25 1439.14,895.29 1439.14,895.29
             1439.14,895.29 1457.76,911.97 1457.76,911.97
             1457.76,911.97 1460.48,908.93 1460.48,908.93
             1461.88,907.37 1462.99,905.91 1463.80,904.54
             1464.62,903.18 1465.15,901.73 1465.40,900.20
             1465.72,898.31 1465.52,896.50 1464.82,894.77
             1464.10,893.04 1462.81,891.33 1460.93,889.65 Z
           M 1486.48,869.41
           C 1486.48,869.41 1474.42,882.88 1474.42,882.88
             1475.44,883.79 1476.48,884.43 1477.54,884.77
             1478.60,885.11 1479.64,885.19 1480.64,885.03
             1481.63,884.90 1482.60,884.55 1483.53,883.99
             1484.46,883.42 1485.35,882.66 1486.19,881.72
             1487.30,880.48 1488.18,879.01 1488.80,877.30
             1489.43,875.59 1489.74,874.24 1489.73,873.27
             1489.73,873.27 1489.88,873.11 1489.88,873.11
             1489.88,873.11 1493.45,876.31 1493.45,876.31
             1492.99,877.76 1492.43,879.17 1491.77,880.53
             1491.12,881.89 1490.27,883.16 1489.20,884.35
             1486.49,887.39 1483.51,888.99 1480.26,889.16
             1477.02,889.32 1473.81,887.98 1470.65,885.14
             1467.52,882.34 1465.77,879.30 1465.39,876.03
             1465.01,872.75 1466.01,869.78 1468.40,867.11
             1470.60,864.65 1473.11,863.48 1475.92,863.58
             1478.74,863.69 1481.63,865.07 1484.60,867.73
             1484.60,867.73 1486.48,869.41 1486.48,869.41 Z
           M 1480.82,869.73
           C 1479.15,868.26 1477.50,867.51 1475.87,867.50
             1474.25,867.49 1472.70,868.30 1471.24,869.94
             1469.76,871.59 1469.09,873.34 1469.22,875.22
             1469.33,877.09 1470.07,878.75 1471.44,880.21
             1471.44,880.21 1480.82,869.73 1480.82,869.73 Z
           M 1529.31,838.07
           C 1529.31,838.07 1526.41,841.30 1526.41,841.30
             1526.41,841.30 1505.24,822.34 1505.24,822.34
             1505.24,822.34 1513.63,842.09 1513.63,842.09
             1513.63,842.09 1511.90,844.02 1511.90,844.02
             1511.90,844.02 1491.41,837.79 1491.41,837.79
             1491.41,837.79 1512.58,856.75 1512.58,856.75
             1512.58,856.75 1509.87,859.78 1509.87,859.78
             1509.87,859.78 1485.29,837.76 1485.29,837.76
             1485.29,837.76 1489.25,833.34 1489.25,833.34
             1489.25,833.34 1508.80,839.14 1508.80,839.14
             1508.80,839.14 1500.69,820.56 1500.69,820.56
             1500.69,820.56 1504.73,816.05 1504.73,816.05
             1504.73,816.05 1529.31,838.07 1529.31,838.07 Z
           M 1516.36,809.06
           C 1516.36,809.06 1513.25,812.53 1513.25,812.53
             1513.25,812.53 1510.27,809.86 1510.27,809.86
             1510.27,809.86 1513.38,806.39 1513.38,806.39
             1513.38,806.39 1516.36,809.06 1516.36,809.06 Z
           M 1537.78,828.60
           C 1537.78,828.60 1535.03,831.68 1535.03,831.68
             1535.03,831.68 1516.41,815.00 1516.41,815.00
             1516.41,815.00 1519.16,811.93 1519.16,811.93
             1519.16,811.93 1537.78,828.60 1537.78,828.60 Z" />
</svg>   
        </section>
    )
}