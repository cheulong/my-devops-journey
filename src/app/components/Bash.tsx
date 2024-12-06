
export default function Bash() {
  return (
    <div className="">
      <p className="text-xl font-bold">Bash</p>
      <input type="checkbox" id="option1" name="options" value="Option1"/>
      <label htmlFor="option1">Print</label><br/>
      <div className="mt-4">
      <code className="text-sm bg-slate-300 p-4">
        <span className="text-red-500">$</span> echo "Hello World"
      </code>
      </div>
    </div>
  );
}
