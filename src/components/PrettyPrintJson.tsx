const PrettyPrintJson = <T,>({ data }: { data: T }) => {
  // (destructured) data could be a prop for example
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PrettyPrintJson;
