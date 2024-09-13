# <img src="./src/assets/travelo-logo.png" width="35" height="35"> Travelo - Your Ultimate Travel Booking Platform 

**Travelo** is your gateway to discovering and booking the best hotels and accommodations around the globe. Designed with simplicity and efficiency in mind, our platform makes it easier than ever to find your ideal place to stay, whether for leisure or business.

## Quick Links

- [**Live Site**](https://app-travelo.netlify.app/)
- [**Documentation**](https://sumptuous-papyrus-489.notion.site/Travelo-Documentation-0ff9fb05e165806b87d0fc5cf8b6111a?pvs=4)

## Built With

- [<img src="https://www.svgrepo.com/show/354259/react.svg" alt="React" width="20" height="20"/>](https://react.dev/) **React**: UI library for building the user interface.
- [<img src="https://www.svgrepo.com/show/303600/typescript-logo.svg" alt="TypeScript" width="20" height="20"/>](https://www.typescriptlang.org/) **TypeScript**: Static type checking for catching errors early.
- [<img src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" alt="React Query" width="20" height="20"/>](https://tanstack.com/query/v3/docs/framework/react/overview) **React Query**: Data-fetching and caching for improved performance.
- [<img src="https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png" alt="MUI" width="20" height="20"/>](https://mui.com/) **MUI**: UI component library for building responsive, beautiful interfaces.
- [<img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49280/preview.svg" alt="Zustand" width="20" height="20"/>](https://docs.pmnd.rs/zustand/getting-started/introduction) **Zustand**: State management for handling complex application states.
- [<img src="https://user-images.githubusercontent.com/62269745/197410201-d707e69d-5ec4-49a0-a482-c2df4d15662d.png" alt="Storybook" width="20" height="20"/>
](https://storybook.js.org/) **Storybook**: Frontend workshop for building UI components and pages in isolation.
- [<img src="https://pbs.twimg.com/profile_images/925713973789560832/uiRIO5mN_400x400.jpg" alt="Prettier" width="20" height="20"/>](https://prettier.io/) **Prettier**: Code formatter ensuring consistent styling.

## Features

- **Token-based Authentication**: Secure login with role-based access for users and admins.
- **User Roles**: Different roles for Users and Admins, providing specialized access and functionality.
- **Admin Dashboard**: Manage hotels, bookings, and user data efficiently.
- **Search and Filtering**: Advanced filtering options for users to find hotels based on specific criteria.
- **Fully Responsive**: The platform is optimized for all screen sizes, providing a smooth experience on mobile, tablet, and desktop.
- **Loading Skeletons**: Ensure better user experience with loading skeletons while fetching data.
- **Optimized Performance**: Client-side caching with `React Query` for fast and efficient data retrieval.
- **Custom Hooks**: Reusable custom hooks for logic separation and cleaner code.
- **Form Handling**: Integration with `Formik` and `Yup` for seamless and validated form submissions.
- **Payment Integration**: Secure and easy-to-use payment options for seamless booking.

## Authentication

**Travelo** features a robust token-based authentication system with distinct user roles. Here are the credentials for testing the application:

- **User**:
  - Username: `user`
  - Password: `user`

- **Admin**:
  - Username: `admin`
  - Password: `admin`

## How to Run Locally

Follow these steps to clone and run the **Travelo** project locally:

### Clone the Repository

```bash
git clone https://github.com/Jamal-SaadEddin/Travelo.git
```

### Navigate to the Project Directory

```bash
cd Travelo
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Once the server starts, the application will be available at `http://localhost:5173`.

## Testing Storybook

The **Storybook** design system for **Travelo** allows you to visualize and interact with individual UI components in isolation.

### Running Storybook

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`.

## Authors

👨‍💻 **Jamal SaadEddin**

- [**GitHub**](https://github.com/Jamal-SaadEddin)
- [**LinkedIn**](https://www.linkedin.com/in/jamalsaadeddin)

## Acknowledgements

- This project is the final project of the [Foothill Solutions](https://www.foothillsolutions.com/) internship program.

<p align="left">
    <img src="https://user-images.githubusercontent.com/62269745/174906065-7bb63e14-879a-4740-849c-0821697aeec2.png#gh-light-mode-only" width="40%">
    <img src="https://user-images.githubusercontent.com/62269745/174906068-aad23112-20fe-4ec8-877f-3ee1d9ec0a69.png#gh-dark-mode-only" width="40%">
</p>

---

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). Feel free to use it for your own projects!
