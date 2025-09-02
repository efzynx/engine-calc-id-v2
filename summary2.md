# Design Description and Color Palette for Engine-Calc-ID

## Design Philosophy
The design for **engine-calc-id** will adopt an "Industrial Modern" theme - combining mechanical aesthetics with a clean and modern interface. This design will blend visual elements reminiscent of the automotive world with an intuitive and professional user experience.

## Selected Color Palette (Option 1: Blue & Gray with Orange Accent)

### Primary Colors:
- **Dark Blue (#0D3B66)** - Primary color: represents reliability, trust, and professionalism
- **Light Gray (#F8F9FA)** - Background: for optimal readability and clean impression
- **White (#FFFFFF)** - Card background: clear contrast for content areas

### Accent Colors:
- **Mechanical Orange (#F4A261)** - Main buttons, important indicators, interactive elements
- **Warning Red (#E76F51)** - For error messages or important warnings

### Neutral Colors:
- **Medium Gray (#E9ECEF)** - For borders and separators
- **Dark Gray (#6C757D)** - Secondary text and labels
- **Near Black (#212529)** - Primary text for maximum contrast

## Layout and Components Description

### 1. Header
- **Background**: Dark blue (#0D3B66) with subtle metallic texture
- **Left**: App logo with gear/engine cylinder icon + "ENGINE-CALC-ID" text
- **Center**: Main navigation (Home, Calculators, History, About)
- **Right**: 
  - Theme toggle button (light/dark) with sun/moon icon
  - User profile photo (if logged in) with dropdown menu
  - Login/Register button if user is not authenticated

### 2. Hero Section (Home Page)
- **Background**: Metallic blue gradient with subtle engine outline illustration
- **Main text**: "The Most Complete Engine Calculator for Professional Mechanics"
- **Explanation text**: Brief description of the application's benefits
- **Calculator grid**: Cards with icons representing each calculator type (CC, Compression, Carburetor, etc.)
- **Main call-to-action button**: "Start Calculating" with orange accent color

### 3. Calculator Cards
- **Background**: White with subtle shadow for elevation effect
- **Card header**: Light blue background with representative icon and calculator title
- **Card body**: Input form with clear labels and informative placeholders
- **Calculate button**: Orange color with prominent hover effect
- **Result area**: Left border in orange, clear typography for calculation results
- **Additional action buttons**: Save, Share, Reset with intuitive icons

### 4. Calculator Display
- **Input fields**: Clean design with floating labels, clear measurement units
- **Visualization**: Simple diagrams showing input parameters (e.g., cylinder diagram for CC calculator)
- **Calculation results**: Displayed in a special box with large, clear typography
- **Recommendations**: Separate box with info icon for suggestions/recommendations based on results

### 5. Sidebar (if needed)
- **Background**: Very light gray (#F8F9FA)
- **User profile**: Photo, name, and specialization (if available)
- **Navigation menu**: Grouped by calculator categories
- **History**: List of recent calculations that can be clicked

### 6. History Page
- **Table**: Clean design with zebra-striped rows for readability
- **Filters**: Options to filter by date and calculator type
- **Actions**: Icons to view details, delete, or reuse parameters

### 7. Footer
- **Background**: Dark blue (#0D3B66)
- **Upper section**: Quick links, newsletter subscription (optional)
- **Lower section**: Copyright, privacy policy links, terms of service
- **Credit**: For developers and formula reference sources

### 8. Modal/Dialog
- **Background**: Semi-transparent overlay
- **Modal content**: Card with rounded corners, higher shadow depth
- **Close button**: Clearly visible in the top right corner

### 9. Notifications/Toast
- **Success**: Green with checkmark icon
- **Error**: Red with warning icon
- **Info**: Blue with information icon
- **Position**: Bottom right corner with slide-in animation

### 10. Mobile View
- **Navigation**: Bottom navigation bar with intuitive icons
- **Header**: Simplified with only logo and menu toggle
- **Input**: Optimized for touch interaction
- **Layout**: Single column with sufficient padding for touch targets

## Special Automotive-Themed Elements
- **Background texture**: Subtle brushed metallic texture
- **Divider**: Dashed lines like measurement scales
- **Icons**: Using mechanical and automotive-themed icons
- **Loading indicator**: Rotating gear animation or timing belt

## User Experience
- **Interaction**: Visual feedback for every interaction (hover, click)
- **Animations**: Smooth transitions between pages and states
- **Progress indicator**: For complex calculation processes
- **Tooltips**: Brief explanations for less familiar technical parameters

## Responsive Design
- **Breakpoints**: Optimized for mobile, tablet, and desktop
- **Grid system**: Adaptive layout that maintains content readability
- **Typography**: Font size adaptive based on viewport

With this design approach, engine-calc-id will present itself as a reliable professional tool while remaining easy to use for users with varying levels of technical knowledge.