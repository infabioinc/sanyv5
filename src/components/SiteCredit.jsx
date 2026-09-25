// Official Fabulous Media / GoCommercially site credit — paste as-is.
// Note (per SANY handover): agency links in the client footer are pending
// SANY's approval before public launch. Kept here for the review build.
export default function SiteCredit() {
  return (
    <div className="poweredBy">
      <a
        href="https://play.fabulousmedia.in"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="FabulousMedia"
        className="creditLogo"
      >
        <img
          src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
          alt="FabulousMedia"
        />
      </a>

      <div className="divider" />

      <a
        href="https://gocommercially.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GoCommercially"
        className="creditLogo"
      >
        <img
          src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
          alt="GoCommercially"
        />
      </a>
    </div>
  )
}
