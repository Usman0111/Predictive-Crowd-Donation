import keras
import tensorflow as tf
from keras.models import Model
from keras.layers import Dense, Dropout, LSTM, Input, Activation, concatenate
from keras import optimizers
from util import csv_to_dataset, history_days
import numpy as np
np.random.seed(4)
tf.random.set_seed(4)


# Load preprocessed dataset of stock prices
ohlcv_histories, moving_averages, next_day_open_values, unscaled_y, y_normaliser = csv_to_dataset('MSFT_daily.csv')

# Split into test and training sets
train_split = 0.9
n = int(ohlcv_histories.shape[0] * train_split)

ohlcv_train = ohlcv_histories[:n]
mov_avg_train = technical_indicators[:n]
open_prices_train = next_day_open_values[:n]

ohlcv_test = ohlcv_histories[n:]
mov_avg_test = technical_indicators[n:]
open_prices_test = next_day_open_values[n:]

unscaled_open_prices_test = unscaled_y[n:]