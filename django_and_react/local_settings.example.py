# Database Personal Settings

from .settings import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.djlocal'),
        # Not use for sqlite3
        # 'USER': '',
        # 'PASSWORD': '',
        # 'HOST': '',
        # 'PORT' '',
    }
}