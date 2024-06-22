var geoCoordMap = {
    'Afghanistan': [67.709953, 33.93911],
    'Albania': [20.168331, 41.153332],
    'Algeria': [1.6596, 28.0339],
    'Andorra': [1.5218, 42.5063],
    'Angola': [17.873887, -11.202692],
    'Antigua and Barbuda': [-61.7964, 17.0608],
    'Argentina': [-63.616672, -38.416097],
    'Armenia': [45.038189, 40.069099],
    'Australia': [133.775136, -25.274398],
    'Austria': [14.550072, 47.516231],
    'Azerbaijan': [47.576927, 40.143105],
    'Bahamas': [-77.396280, 25.034280],
    'Bahrain': [50.637772, 25.930414],
    'Bangladesh': [90.356331, 23.684994],
    'Barbados': [-59.543198, 13.193887],
    'Belarus': [27.953389, 53.709807],
    'Belgium': [4.469936, 50.503887],
    'Belize': [-88.497650, 17.189877],
    'Benin': [2.315834, 9.307690],
    'Bhutan': [90.433601, 27.514162],
    'Bolivia': [-63.588653, -16.290154],
    'Bosnia and Herzegovina': [17.679076, 43.915886],
    'Botswana': [24.684866, -22.328474],
    'Brazil': [-51.92528, -14.235004],
    'Brunei': [114.727669, 4.535277],
    'Bulgaria': [25.485830, 42.733883],
    'Burkina Faso': [-1.561593, 12.238333],
    'Burundi': [29.918886, -3.373056],
    'Cabo Verde': [-23.605172, 16.002082],
    'Cambodia': [104.990963, 12.565679],
    'Cameroon': [12.354722, 7.369722],
    'Canada': [-106.346771, 56.130366],
    'Central African Republic': [20.939444, 6.611111],
    'Chad': [18.732207, 15.454166],
    'Chile': [-71.542969, -35.675147],
    'China': [104.195397, 35.86166],
    'Colombia': [-74.297333, 4.570868],
    'Comoros': [43.872219, -11.875001],
    'Congo (Congo-Brazzaville)': [15.827659, -0.228021],
    'Costa Rica': [-83.753428, 9.748917],
    'Croatia': [15.2, 45.1],
    'Cuba': [-77.781167, 21.521757],
    'Cyprus': [33.429859, 35.126413],
    'Czech Republic (Czechia)': [15.472962, 49.817492],
    'Democratic Republic of the Congo': [23.656, -2.922],
    'Denmark': [9.501785, 56.26392],
    'Djibouti': [42.590275, 11.825138],
    'Dominica': [-61.370976, 15.414999],
    'Dominican Republic': [-70.162651, 18.735693],
    'Ecuador': [-78.183406, -1.831239],
    'Egypt': [30.802498, 26.820553],
    'El Salvador': [-88.896530, 13.794185],
    'Equatorial Guinea': [10.267895, 1.650801],
    'Eritrea': [39.782334, 15.179384],
    'Estonia': [25.013607, 58.595272],
    'Eswatini (Swaziland)': [31.465866, -26.522503],
    'Ethiopia': [40.489673, 9.145],
    'Fiji': [178.065032, -17.713371],
    'Finland': [25.748151, 61.92411],
    'France': [2.213749, 46.227638],
    'Gabon': [11.609444, -0.803689],
    'Gambia': [-15.310139, 13.443182],
    'Georgia': [43.356892, 42.315407],
    'Germany': [10.451526, 51.16569],
    'Ghana': [-1.023194, 7.946527],
    'Greece': [21.824312, 39.074208],
    'Grenada': [-61.604171, 12.262776],
    'Guatemala': [-90.230759, 15.783471],
    'Guinea': [-9.696645, 9.945587],
    'Guinea-Bissau': [-15.180413, 11.803749],
    'Guyana': [-58.93018, 4.860416],
    'Haiti': [-72.285215, 18.971187],
    'Honduras': [-86.241905, 15.199999],
    'Hungary': [19.503304, 47.162494],
    'Iceland': [-19.020835, 64.963051],
    'India': [78.96288, 20.593684],
    'Indonesia': [113.921327, -0.789275],
    'Iran': [53.688046, 32.427908],
    'Iraq': [43.679291, 33.223191],
    'Ireland': [-8.24389, 53.41291],
    'Israel': [34.851612, 31.046051],
    'Italy': [12.56738, 41.87194],
    'Ivory Coast': [-5.547080, 7.539989],
    'Jamaica': [-77.297508, 18.109581],
    'Japan': [138.252924, 36.204824],
    'Jordan': [36.238414, 30.585164],
    'Kazakhstan': [66.923684, 48.019573],
    'Kenya': [37.906193, -0.023559],
    'Kiribati': [-168.734039, -3.370417],
    'Kuwait': [47.481766, 29.31166],
    'Kyrgyzstan': [74.766098, 41.20438],
    'Laos': [102.495496, 19.85627],
    'Latvia': [24.603189, 56.879635],
    'Lebanon': [35.862285, 33.854721],
    'Lesotho': [28.233608, -29.609988],
    'Liberia': [-9.429499, 6.428055],
    'Libya': [17.228331, 26.3351],
    'Liechtenstein': [9.555373, 47.166],
    'Lithuania': [23.881275, 55.169438],
    'Luxembourg': [6.129583, 49.815273],
    'Madagascar': [46.869107, -18.766947],
    'Malawi': [34.301525, -13.254308],
    'Malaysia': [101.975766, 4.210484],
    'Maldives': [73.5, 1.977247],
    'Mali': [-3.996166, 17.570692],
    'Malta': [14.375416, 35.937496],
    'Marshall Islands': [171.184478, 7.131474],
    'Mauritania': [-10.940835, 21.00789],
    'Mauritius': [57.552152, -20.348404],
    'Mexico': [-102.552784, 23.634501],
    'Micronesia': [150.550812, 7.425554],
    'Moldova': [28.369885, 47.411631],
    'Monaco': [7.412841, 43.750298],
    'Mongolia': [103.846656, 46.862496],
    'Montenegro': [19.37439, 42.708678],
    'Morocco': [-7.09262, 31.791702],
    'Mozambique': [35.529562, -18.665695],
    'Myanmar': [95.956223, 21.913965],
    'Namibia': [18.49041, -22.95764],
    'Nauru': [166.931503, -0.522778],
    'Nepal': [84.124008, 28.394857],
    'Netherlands': [5.291266, 52.132633],
    'New Zealand': [174.885971, -40.900557],
    'Nicaragua': [-85.207229, 12.865416],
    'Niger': [8.081666, 17.607789],
    'Nigeria': [8.675277, 9.081999],
    'North Korea': [127.510093, 40.339852],
    'North Macedonia': [21.745275, 41.608635],
    'Norway': [8.468946, 60.472024],
    'Oman': [55.923255, 21.512583],
    'Pakistan': [69.345116, 30.375321],
    'Palau': [134.58252, 7.51498],
    'Palestine': [35.233154, 31.952162],
    'Panama': [-80.782127, 8.537981],
    'Papua New Guinea': [143.95555, -6.314993],
    'Paraguay': [-58.443832, -23.442503],
    'Peru': [-75.015152, -9.189967],
    'Philippines': [121.774017, 12.879721],
    'Poland': [19.145136, 51.919438],
    'Portugal': [-8.224454, 39.399872],
    'Qatar': [51.183884, 25.354826],
    'Romania': [24.96676, 45.943161],
    'Russia': [105.318756, 61.52401],
    'Rwanda': [29.873888, -1.940278],
    'Saint Kitts and Nevis': [-62.782998, 17.357822],
    'Saint Lucia': [-60.978893, 13.909444],
    'Saint Vincent and the Grenadines': [-61.287228, 12.984305],
    'Samoa': [-172.104629, -13.759029],
    'San Marino': [12.457777, 43.94236],
    'Sao Tome and Principe': [6.613081, 0.18636],
    'Saudi Arabia': [45.079162, 23.885942],
    'Senegal': [-14.452362, 14.497401],
    'Serbia': [21.005859, 44.016521],
    'Seychelles': [55.491977, -4.679574],
    'Sierra Leone': [-11.779889, 8.460555],
    'Singapore': [103.819836, 1.352083],
    'Slovakia': [19.699024, 48.669026],
    'Slovenia': [14.995463, 46.151241],
    'Solomon Islands': [160.156194, -9.64571],
    'Somalia': [46.199616, 5.152149],
    'South Africa': [22.937506, -30.559482],
    'South Korea': [127.766922, 35.907757],
    'South Sudan': [31.3069788, 6.876991899999999],
    'Spain': [-3.74922, 40.463667],
    'Sri Lanka': [80.771797, 7.873054],
    'Sudan': [30.217636, 12.862807],
    'Suriname': [-56.027783, 3.919305],
    'Sweden': [18.643501, 60.128161],
    'Switzerland': [8.227512, 46.818188],
    'Syria': [38.996815, 34.802075],
    'Taiwan': [120.960515, 23.69781],
    'Tajikistan': [71.276093, 38.861034],
    'Tanzania': [34.888822, -6.369028],
    'Thailand': [100.992541, 15.870032],
    'Timor-Leste': [125.727539, -8.874217],
    'Togo': [0.824782, 8.619543],
    'Tonga': [-175.198242, -21.178986],
    'Trinidad and Tobago': [-61.222503, 10.691803],
    'Tunisia': [9.537499, 33.886917],
    'Turkey': [35.243322, 38.963745],
    'Turkmenistan': [59.556278, 38.969719],
    'Tuvalu': [179.194977, -7.109535],
    'Uganda': [32.290275, 1.373333],
    'Ukraine': [31.16558, 48.379433],
    'United Arab Emirates': [53.847818, 23.424076],
    'United Kingdom': [-3.435973, 55.378051],
    'United States': [-95.712891, 37.09024],
    'Uruguay': [-55.765835, -32.522779],
    'Uzbekistan': [64.585262, 41.377491],
    'Vanuatu': [166.959158, -15.376706],
    'Vatican City (Holy See)': [12.453389, 41.902916],
    'Venezuela': [-66.58973, 6.42375],
    'Vietnam': [108.277199, 14.058324],
    'Yemen': [48.516388, 15.552727],
    'Zambia': [27.849332, -13.133897],
    'Zimbabwe': [29.154857, -19.015438]
};
