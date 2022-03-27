import Link from 'next/link';
import { Nav,StyledLink } from '../styles/sidebarStyles';



export default function Sidebar() {
  return (
    <Nav> 
      <Link href="/excel" passHref>
              <StyledLink>Excel </StyledLink>
        </Link>

      <Link href="/errors" passHref>
              <StyledLink>Error</StyledLink>
        </Link>
    </Nav>
  )
}
