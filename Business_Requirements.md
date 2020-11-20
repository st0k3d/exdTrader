Please develop a ticket in React and Redux according to this spec; a mock server is not required

1.	A window consisting of an adjustable horizontal splitter in the middle of the page
a.	On top, there is a ticket
b.	On the bottom, a data grid using ag-grid

2.	The ticket consists of the following fields – you must use ant design widgets
-	Action: a dropdown w/the following options:
o	Buy – when chosen, highlight the dropdown in green
o	Sell – when chosen, highlight the dropdown in red
-	Symbol: a search text field that displays tickers based on the keys the user enters
o	Limit this to a set of tickers, such as AAPL, MSFT, GOOGL, VZ, MMM, NFLX, FB, TWTR, AMZN, EBAY
o	Show the closest match(es) based on what the user has keyed in
o	If nothing is found, show ‘not found’
-	Qty – numeric value, with a spinner, the value cannot be greater than 999
-	TIF: dropdown w/these options
o	GTC
o	DAY
o	FOK
o	IOC
-	Order Type: a dropdown w/2 values, Market or Limit
-	Price – decimal value with 2 decimal point precision, example, 100.99
-	Stop Price – decimal value with 2 decimal point precision, example, 100.99

The Price and Stop Price fields are only required when the order is a limit order.

-	Comments
-	Send button: enabled when one of the following conditions are met
o	When order type is a limit order, symbol, qty, price and stop price must be supplied
o	When order type is a market order, symbol and qty are required

3.	Additional requirements
-	Pressing send should;
-	Add a 2 second delay when pressing send to populate the grid, show a progress indicator
-	take the fields supplied and populate the data grid below the splitter
-	Show a tooltip on the comment cell column showing its contents
-	Every 10th order submitted should fail – display an error to the user indicating a generic message saying the “Order time has elapsed”, with a single ‘Ok’ option
-	The ‘Last Updated Time’ updates when the order is submitted
-	The Action column should render a Green background with white text when Action == ‘Buy’ Red with white text when Action == ‘Sell’