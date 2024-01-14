import plotly.express as px
import pandas as pd
from plotly.offline import plot

# Creating a DataFrame with points
data = {
    'Username': [1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,7,7,7,7,7,7,14,14,14,14,14,14,15,15,15,15,15,15,16,16,16,16,16,16],
    'Password': [5,5,6,6,7,7,5,5,6,6,7,7,5,5,6,6,7,7,5,5,6,6,7,7,5,5,6,6,7,7,5,5,6,6,7,7,5,5,6,6,7,7],
    'Email': ['Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid','Invalid','valid']
}

length_username = len(data['Username'])
length_email = len(data['Email'])
length_password = len(data['Password'])

print("Length of 'Username' array:", length_username)
print("Length of 'Email' array:", length_email)
print("Length of 'Password' array:", length_password)

df = pd.DataFrame(data)

# Creating the 3D scatter plot with customized axis labels and color based on multiple conditions
color_condition = ((df['Email'] == 'valid') & (df['Password'] >= 6) & ((df['Username'] >= 2) & (df['Username'] <= 15)))

# Sorting the DataFrame based on the condition for Email and Password
sorted_df = df[color_condition].sort_values(by=['Email', 'Password', 'Username'])

fig = px.scatter_3d(df, x='Username', y='Email', z='Password', title='US001 - Boundary Value Analysis (Worst Case with Robustness)',
                    color=color_condition, color_discrete_map={True: 'green', False: 'red'})


# Customizing axis labels and setting ticks to integer values with 1 unit divisions
fig.update_layout(scene=dict(
    xaxis=dict(title='(Username Characters)', tickmode='linear', tick0=0, dtick=1),
    yaxis=dict(title='(Email Pattern)', tickmode='linear', tick0=0, dtick=1),
    zaxis=dict(title='(Password Characters)', tickmode='linear', tick0=0, dtick=1),
))

fig.show()

