from flask import Flask, render_template
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import random
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app, resources={r"/socket.io/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

countries = [
    'Afghanistan', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Bangladesh',
    'Belarus', 'Belgium', 'Bolivia', 'Botswana', 'Brazil', 'Bulgaria', 'Burkina Faso',
    'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica',
    'Croatia', 'Cuba', 'Czech Republic (Czechia)', 'Denmark', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Estonia', 'Ethiopia', 'Finland', 'France',
    'Germany', 'Ghana', 'Greece', 'Guatemala', 'Haiti', 'Honduras', 'Hungary', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia', 'Lebanon', 'Lithuania', 'Malaysia',
    'Mali', 'Mexico', 'Mongolia', 'Morocco', 'Myanmar', 'Nepal', 'Netherlands',
    'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman',
    'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
    'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia',
    'Senegal', 'Serbia', 'Singapore', 'Slovakia', 'South Africa', 'South Korea',
    'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
    'Tanzania', 'Thailand', 'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam',
    'Yemen', 'Zambia', 'Zimbabwe'
]

ev_types = ['clean', 'mw', 'cc', 'eta', 'dns']
protocols = ['http', 'https', 'ftp', 'smtp', 'imap', 'icmp']
actions = ['block', 'alert', 'allow', 'monitor']

def generate_random_ip():
    return f"{random.randint(1, 255)}.{random.randint(0, 255)}.{random.randint(0, 255)}.{random.randint(0, 255)}"

def generate_device_sn():
    return f"{random.randint(100000, 999999)}{random.choice(['a', 'b', 'c'])}{random.randint(10000, 99999)}-ODBqO"

def emit_random_events():
    max_events = 0.5

    # Infinite loop
    while True:
        # Either emit a event or skip
        num_events = random.randint(0, int(max_events))
        events = []


        for _ in range(num_events):
            ev_type = random.choice(ev_types)
            country = random.choice(countries)
            # You can fully customize this part as needed.
            event = {
                'ev_type': ev_type,
                'device_sn': generate_device_sn(),
                'client_ip': generate_random_ip(),
                'threat_ip': generate_random_ip(),
                'protocol': random.choice(protocols),
                'threat_level': random.randint(0, 10),
                'continent': 'North America',  # Static for simplicity, change as needed
                'country': country,
                'size': random.randint(20, 10000),
                'action': random.choice(actions),
                'timestamp': int(time.time())
            }
            events.append(event)

        print('Emitting events: %s (max events: %d)' % (events, max_events))
        socketio.emit('new_events', events)
        max_events *= 1.2
        if max_events > 5:
            max_events = 5
        time.sleep(random.uniform(0.5, 3))

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def handle_connect():
    print('Client connected')

if __name__ == '__main__':
    socketio.start_background_task(emit_random_events)
    socketio.run(app, debug=True)

