export default function FootballCommentaryAudio({ audio }) {
  return (
    <>
      {audio !== null && (
        <div>
          <audio controls>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </>
  );
}
