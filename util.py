import json
import pickle

__data_columns = None
__model = None


def get_target_weight(gender, smoke, alco, age, height, weight):
    return __model.predict([[gender, smoke, alco, age, height, weight]]).tolist()


def load_data():
    print("Start loading...")
    global __data_columns

    with open("artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']

    global __model
    with open("artifacts/gym_weighter.pickle", "rb") as f:
        __model = pickle.load(f)
    print("Loading is complete...")


if __name__ == "__main__":
    load_data()
    print(get_target_weight(1, 1, 1, 30, 150, 150))
