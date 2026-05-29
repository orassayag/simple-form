# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/simple-form/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:

- **React.js** with functional and class components
- **ESLint** for code quality
- **PropTypes** for component prop validation
- **LESS** for styling

Before submitting:

```bash
# Install dependencies
npm install

# Check for linting errors
npm run lint

# Build the project
npm run build

# Test the application
npm start
```

### Coding Standards

1. **Component Structure**: Follow existing patterns - separate presentational and container components
2. **PropTypes**: All components must have PropTypes validation
3. **Styling**: Use LESS files alongside component files
4. **Validation**: Implement proper input validation with clear error messages
5. **Naming**: Use clear, descriptive names for variables, functions, and components
6. **File Organization**: Keep related files together (component, styles, tests)

### Adding New Features

When adding new features:

1. Create components in `src/components/` or containers in `src/containers/`
2. Add corresponding LESS files for styling
3. Update models in `src/models/` if needed
4. Add utility functions in `src/utils/`
5. Update translation files in `src/translate/`
6. Test thoroughly in development mode

### Translation Support

When adding new text:

1. Add entries to `src/translate/translate.en.json`
2. Use the translate object in components
3. Follow the existing naming convention: `component_element_purpose`

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
