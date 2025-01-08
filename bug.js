```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a sample page.</p>
    </div>
  );
}
```

```javascript
// pages/about.js
export default function About() {
  // This will cause an error because of missing return statement
  // <div> is not returned
  <div>
    <h1>About Us</h1>
  </div>
}
```