// the journal image and user input form

// import the journal image from assets folder
import journalImage from '../assets/journalImage.png';

export default function MainContent() {

  return (
    <main className="flex flex-col items-center">
      <img
        src={journalImage}
        alt="journal"
        className="w-1/2"
      />
    </main>
  );
}
