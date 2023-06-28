import Link from 'next/link';
import { Nav } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <Nav className="col-md-2 d-none d-md-block" >
      <div className="sidebar-sticky h-100 bg-dark">
        <Nav className="flex-column">
          <Link href="/HomePage" passHref  className="nav-link custom-nav-link btn btn-dark text-muted text-decoration-none mb-2">
            <Nav.Link >General</Nav.Link>
          </Link>
          <Link href="/HomePage" passHref  className="nav-link custom-nav-link btn btn-dark text-muted text-decoration-none mb-2">
            <Nav.Link>Users</Nav.Link>
          </Link>
          <Link href="/HomePage" passHref  className="nav-link custom-nav-link btn btn-dark text-muted text-decoration-none mb-2">
            <Nav.Link >Reports</Nav.Link>
          </Link>
          <Link href="/HomePage" passHref  className="nav-link custom-nav-link btn btn-dark text-muted text-decoration-none mb-2">
            <Nav.Link>Inbox</Nav.Link>
          </Link>
          <Link href="/HomePage" passHref  className="nav-link custom-nav-link btn btn-dark text-muted text-decoration-none mb-2">
            <Nav.Link >Sent</Nav.Link>
          </Link>
          <Link href="/HomePage" passHref  className="nav-link custom-nav-link btn btn-dark text-muted text-decoration-none mb-2">
            <Nav.Link >Drafts</Nav.Link>
          </Link>
          <Link href="/HomePage" passHref  className="nav-link custom-nav-link btn btn-dark text-muted text-decoration-none mb-2">
            <Nav.Link >Trash</Nav.Link>
          </Link>
        </Nav>
      </div>
    </Nav>
  );
}