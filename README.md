        npm install react-router-dom

router package allows to handle url without fetching new html pages. We should add routing tool to our code, it will watch url changing and we should let the router know wich component should be loaded for each route(for each url).
<hr>
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

Routes - A container for a nested tree of elements that renders the branch that best matches the current location.

Route - Declares an element that should be rendered at a certain URL path.

The path attribute is a path after domain. So if we visit localhost:3000/new-meetups it will display the component between Route component tag <code> NewMeetups</code>.
The element is a Component that should be rendered in a specific path.

when we visit localhost:3000/favorites the Favorites component will be displayed

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