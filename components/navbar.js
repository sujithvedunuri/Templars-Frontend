import Link from 'next/link';
import { Nav,StyledLink } from '../styles/navbarStyles';

export default function Navbar() {
  return (
    <Nav>
      <div>
          <Link href="/login" passHref>
              <StyledLink>Templars</StyledLink>
          </Link>
      </div>
    </Nav>
  )
}
