import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="lg:static lg:w-auto  lg:p-4">
          NucleoDB
        </p>
        <div className="topMenu fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a href={"https://docs.synload.com/books/nucleodb"}>&lt;NucleoDB Docs&gt;</a> <a href={"https://docs.synload.com/books/nucleodb/chapter/spring-data-repository-library"}>&lt;Spring Docs&gt;</a>
        </div>
      </div>
      <div className={"relative mt-10"}>
        <div className={"description"}>
          NucleoDB is an in-memory database designed to provide high-speed embedded replicas for microservices.
        </div>
        <div className={"relative button-list"}>
          <a className={"button"} href={"https://docs.synload.com/books/nucleodb/page/quickstart"}> <FontAwesomeIcon icon={faGithub} /> Quickstart</a>
          <a className={"button"} href={"https://docs.synload.com/books/nucleodb/page/description"}> <FontAwesomeIcon icon={faBook} /> Learn More</a>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://docs.synload.com/books/nucleodb"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Documentation with examples and specifics about the database architecture.
          </p>
        </a>

        <a
          href="https://github.com/NucleoTeam/NucleoDB-Examples/tree/main/spring"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Spring Example{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Github repository with example of how to use spring data repository
          </p>
        </a>

        <a
          href="https://github.com/NucleoTeam/NucleoDB-Examples"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Examples{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Use NucleoDB without spring framework integration.
          </p>
        </a>

        <a
          href="/usages"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-blue-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Use Cases{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Projects currently using NucleoDB
          </p>
        </a>
      </div>
    </main>
  )
}
