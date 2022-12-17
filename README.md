        npm install react-router-dom

router package allows to handle url without fetching new html pages. We should add routing tool to our code, it will watch url changing and we should let the router know wich component should be loaded for each route(for each url).
<hr>

#### NOTE error 

The error ERR_OSSL_EVP_UNSUPPORTED has been mentioned in the release notes for Node.js 17.

        opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
        library: 'digital envelope routines',
        reason: 'unsupported',
        code: 'ERR_OSSL_EVP_UNSUPPORTED'
#### Solution
As a workaround solution you can fix this by using the legacy provider for openssl. So, you need to edit the package.json file under your application’s root directory and check for the following lines and replace them accordingly.

        replace "start": "react-scripts start" by
        "start": "react-scripts --openssl-legacy-provider start"
        replace "build": "react-scripts build" by 
        "build": "react-scripts --openssl-legacy-provider build"


# BrowserRouter

1. create new folder next to components folder "pages". In "pages" folder we will store components that will be loaded as pages when certain urls are visited. At the end the components will be the regular react components.
2. in index.js we should wrap <App> with router. BrowserRouter is a component itself. BrowserRouter is a React Context. React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

    
        import { BrowserRouter } from 'react-router-dom';
        
        <BrowserRouter><App/></BrowserRouter> 
    

So now we initialize our router package, we make it aware about this App and watches our url<br>


3  in App.js component we should define which components should be loaded for different paths. Route component of 'react-router-dom' job is to listen to different paths and wich components should be loaded for different paths

        import {Route, Routes} from 'react-router-dom';

        <Routes>
           <Route path="/" element={<AllMeetups />} />
           <Route path="/new-meetups" element={<NewMeetups />}/>
           <Route path="/favorites" element={ <Favorites />}/>     
        </Routes>

<b>Routes</b>- A container for a nested tree of elements that renders the branch that best matches the current location.

<b>Route</b> - Declares an element that should be rendered at a certain URL path.

The path attribute is a path after domain. So if we visit localhost:3000/new-meetups it will display the component between Route component tag <code> NewMeetups</code>.
The element is a Component that should be rendered in a specific path. So this element associated with this path

when we visit localhost:3000/favorites the Favorites component will be displayed


<b>Link</b> component is used to create links to different routes.
Link component is used instead of <code>a</code> tag for naviagtion because <code>a</code> will send a new request to the server, while Link is technically <code>a</code> but it won't send any requests. Link is another component of react-router-dom and we should import it. Link has <code>to</code> prop as <code>href</code> attribute for <code>a</code>. Internaly react-router-dom attaches click listener to Link component and it will prevent default sending request, change url bar but will load appropriate component/changes content but don't refresh the page.

        <div>
         <nav>
           <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/all-meetups'>All Meetups</Link></li>
              <li><Link to='/favorites'>Favorites</Link></li>
              <li><Link to='/new-meetups'>New Meetups</Link></li>
           </ul>
         </nav>
         <Routes>
           <Route path="/new-meetups" element={<NewMeetups />}/>
           <Route path="/favorites" element={ <Favorites />}/>
           <Route path="/all-meetups" element={<AllMeetups />} />
           <Route path="/" element={<h1>Hi</h1>} />     
         </Routes>
        </div>


The nav we are rending at the top of our page is outside of our Routes component which means when we change pages this nav section will not be re-rendered as only the content in the Routes component will change when the URL changes.


## React Router five main techniques

1. Dynamic Routing
2. Routing Priority
3. Nested Routes
4. Multiple Routes
5. useRoutes Hook

### Dynamic Routing

        <Route path='/book-list/:id' element={<Book/>}/>



we have an url that goes /book-list/ and then (:) it has something afterwords. In this case id. The (:) signify that it isn't a part of url that hardcoded, it indicates /book-list/ anything. eg /book-list/1. The (:) won't be a part of url, it is indicator for react router that something will be after /book-list/.

Pretty much always when we have a dynamic route like this we want to access the dynamic value in our custom component which is where the useParams hook comes in.

        import { useParams } from "react-router-dom";

        function Book(){
         const {id} = useParams();
         return <div>Book {id}</div>
        }

        export default Book;