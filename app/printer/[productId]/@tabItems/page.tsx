export default function Page() {
  // need fetching all features data
  const data: string[] = Array.from({ length: 10 }, (_, i) =>
    String.fromCharCode(97 + i),
  );

  return (
    <div className="w-8/12 mx-auto text-default-gray">
      <span>Features</span>
      <ul className="list-disc list-inside">
        {data.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
