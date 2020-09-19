import pandas as pd
from sklearn import preprocessing
import numpy as np

history_days = 50

def csv_to_dataset(csv_file_path):
  file_data = pd.read_csv(csv_file_path)
  file_data = file_data.drop('date', axis=1)
  file_data = file_data.drop(0, axis=0)
  print("File data DataFrame:", file_data.shape)
  print(file_data.head())
  file_data = file_data.values
  
  normalizing_scaler = preprocessing.MinMaxScaler()
  normalized_data = normalizing_scaler.fit_transform(file_data)
  print()
  print("Normalized data")
  print(normalized_data[0:5,:])
  
  # Data is in order of: Open stock value, high value, low, close, and volume - ohlcv
  # Creates array of 5x50-value array windows, each one will be a training input into model
  ohlcv_histories_normalised = np.array([normalized_data[i : i + history_days].copy() for i in range(len(normalized_data) - history_days)])
  print()
  print("Normalized inputs", ohlcv_histories_normalised.shape)
  #print(ohlcv_histories_normalised[0:2,0:5])
  
  # Get scaled stock open price values, which model is predicting
  next_day_open_values_normalised = np.array([normalized_data[:,0][i + history_days].copy() for i in range(len(normalized_data) - history_days)])
  next_day_open_values_normalised = np.expand_dims(next_day_open_values_normalised, -1)
  #print()
  print("Next day open values scaled:", next_day_open_values_normalised.shape)
  
  # Get unscaled stock open price from original file data
  next_day_open_values = np.array([file_data[:,0][i + history_days].copy() for i in range(len(file_data) - history_days)])
  next_day_open_values = np.expand_dims(next_day_open_values, -1)
  print("Next day open values unscaled:", next_day_open_values.shape)

  y_normaliser = preprocessing.MinMaxScaler()
  y_normaliser.fit(next_day_open_values)

  # Moving average technical indicator of stock price input
  moving_averages = []
  for his in ohlcv_histories_normalised:
    sma = np.mean(his[:,3]) # Using closing price of the stocks for the moving average, not open price
    moving_averages.append(np.array([sma]))

  moving_averages = np.array(moving_averages) # Convert to numpy array
  moving_averages_scaler = preprocessing.MinMaxScaler() # Scale with min-max scaler
  moving_averages_normalised = moving_averages_scaler.fit_transform(moving_averages)

  assert ohlcv_histories_normalised.shape[0] == next_day_open_values_normalised.shape[0] == moving_averages_normalised.shape[0]
  return ohlcv_histories_normalised, moving_averages_normalised, next_day_open_values_normalised, next_day_open_values, y_normaliser

#ohlcv_histories_scaled, next_day_open_values_scaled, open_values_unscaled, y_normaliser = csv_to_dataset('./MSFT_daily.csv')

