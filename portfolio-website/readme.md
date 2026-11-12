# henryheffernan.com

This is one of two repositories created for my portfolio website <a href="https://henryheffernan.com/"><samp>henryheffernan.com</samp></a>. If you are looking for the 2D OS repository you can find it <a href="https://github.com/henryjeff/portfolio-inner-site"><samp>here</samp></a>! Thanks for taking the time to check this out. If you have any questions of comments, feel free to shoot me an email at <samp><a href="mailto:henryheffernan@gmail.com">henryheffernan@gmail.com</a></samp> or you can DM me on twitter <a href="https://twitter.com/henryheffernan"><samp>@henryheffernan</samp></a>.

<br>

To setup a dev environment:

```bash
# Clone the repository

# Install dependencies 
npm i

# Run the local 3D portfolio server
npm run dev
```

To display the local inner portfolio on the monitor, start its development server
in a second terminal on port 3000 (`npm start` in the `portfolio-inner-site-master`
project). When the 3D site is opened on `localhost`, it loads that local portfolio
automatically. If you open the 3D site using another hostname or IP address, add
`?dev` to its URL.

To serve a production build:

```bash
# Install dependencies if not already done - 'npi i'

# Build for production
npm run build

# Serve the build using express
npm start
```
