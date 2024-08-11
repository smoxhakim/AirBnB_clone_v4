#!/usr/bin/python3

from models.place import Place
from models.amenity import Amenity
from models import storage


place = storage.get(Place, "610a55f4-7d82-47d9-b54c-a76916479001")
