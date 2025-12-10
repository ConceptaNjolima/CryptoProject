import { describe, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react"
import { ThemeProvider } from "../context/ThemeProvide";
import { ThemeToggle } from "../components/ThemeToggle";

describe('ThemeToggle Component', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.classList.remove('dark');
    });
    it('should render theme toggle button', () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        )
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
    it('should display moon emoji and DarkMode text when dark mode is toggled off', async () => {
        localStorage.setItem('   darkMode', 'false');

        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );

        expect(screen.getByText("🌙 Dark Mode")).toBeInTheDocument();
    });
      it('should apply gray background when in dark mode', async () => {
    localStorage.setItem('darkMode', 'true');
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gray-800');
    });
  });

  it('should apply gray background when in light mode', async () => {
    localStorage.setItem('darkMode', 'false');
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    await waitFor(() => {
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gray-800');
    });
  });
})