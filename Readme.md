Create a styled HTML page that uses JavaScript to get JSON data from an API and render data on the page. The code should be contained in a single file (including js, html and css as appropriate.)
Use two of these four API’s: https://swapi.co/
https://pokeapi.co/
https://jsonplaceholder.typicode.com/ http://mtrest.advance.net/mtrest/articles/?blog_id=3674&limit=10&offset=0
Render at least 5-10 data points from each result set. Use vanilla JavaScript.
Lay out and style the data in two columns.

Part one: Code is broken down into several render functions that manipulate the DOM and two main parsing functions. For styling, I only the bootstrap card component.

Part two: Rendering is handled by reusable components and the render function. This enables flexibility, when deciding what should be displayed. The two API calls are placed within the componentDidMount lifecycle method. These API calls are done using promises. Similar to the design above, there are two parsing functions that go through each API response.

To get up and running. Do an NPM install and NPM start.
