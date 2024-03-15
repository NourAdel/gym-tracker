![Vercel Deployments](https://img.shields.io/github/deployments/NourAdel/gym-tracker/Production)

# Fitbod Gym Tracker

## Development

To start the app locally 

```bash
npm install 
```

then

```bash
npm run dev
```

#### Run test cases

```bash
npm run jest
```

#### Open storybook

```bash
npm run storybook dev -p 6006
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack

<div style="display:flex; width:100%; justify-content: center ; gap: 8px; margin-bottom: 20px; ">
<img src="./.media/next-js.svg" alt="next-logo" width="30" height="30"  margin-inline-end:10px"/>
<img src="./.media/Typescript.svg.png" alt="typescript-logo" width="30" height="30" style="; margin-inline-end:10px"/>
<img src="./.media/styled.png" alt="styled-components-logo" width="30" height="30" style="; margin-inline-end:10px"/>
<img src="./.media/jest.jpg" alt="jest-logo" width="30" height="30" >
</div>

- Next.js 13 with app router
- Typescript
- Styled components
- Context API and hooks for state management
- jest for uint testing
- Deploy using Vercel

## TODO

- [ ] (Enhance the exercise details page experience by:
    - Providing a better scrolling experience
    - Creating an API to retrieve a single exercise data using its slug so that user can access the exercise page directly)
- [ ] (Adding clear set & edit set functionalities )
- [ ] (Adding rest time input to the set data)
- [ ] (Adding a loading state and an error state UI )

