import React from 'react';

const AndroidDevelopment = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-accent-dark)]">Android Development</h1>
      <p className="mb-6 text-lg text-[var(--color-text-muted)]">
        Android development is the process of creating applications for devices running the Android operating system using languages like Java or Kotlin and tools such as Android Studio.
      </p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Why Learn Android Development?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Massive user base — over 3 billion devices</li>
          <li>Wide job market for native and cross-platform developers</li>
          <li>Perfect for developing real-world apps and portfolios</li>
        </ul>
      </section>

      {/* Key Concepts */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Concepts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Kotlin & Java:</strong> Official programming languages</li>
          <li><strong>Activities & Fragments:</strong> UI building blocks</li>
          <li><strong>XML Layouts:</strong> Design user interfaces</li>
          <li><strong>Intents:</strong> Communication between components</li>
          <li><strong>Lifecycle Management:</strong> Handle app state correctly</li>
          <li><strong>RecyclerView:</strong> Efficient lists and grids</li>
          <li><strong>Jetpack Libraries:</strong> Navigation, Room, ViewModel, LiveData, DataBinding</li>
          <li><strong>Firebase Integration:</strong> Authentication, Firestore, Realtime DB, Push Notifications</li>
        </ul>
      </section>

      {/* Tools */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Tools & IDEs</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Android Studio:</strong> Official IDE with emulator support</li>
          <li><strong>ADB (Android Debug Bridge):</strong> CLI for debugging and device management</li>
          <li><strong>Gradle:</strong> Dependency management & build configuration</li>
        </ul>
      </section>

      {/* Architecture */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">App Architecture</h2>
        <p className="text-[var(--color-text-muted)] mb-3">
          Android recommends using a layered architecture:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>UI Layer:</strong> Activity, Fragment, Jetpack Compose</li>
          <li><strong>ViewModel:</strong> Stores UI-related data</li>
          <li><strong>Repository:</strong> Manages data operations</li>
          <li><strong>Room:</strong> Local storage database</li>
        </ul>
      </section>

      {/* Sample Code */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Sample Kotlin Activity</h2>
        <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto">
{`import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val helloText = findViewById<TextView>(R.id.helloText)
        helloText.text = "Welcome to Android Development!"
    }
}`}
        </pre>
      </section>

      {/* Career */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Career Opportunities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Android App Developer</li>
          <li>Mobile Software Engineer</li>
          <li>Flutter/React Native Developer (with cross-platform knowledge)</li>
          <li>Mobile UI/UX Engineer</li>
        </ul>
      </section>

      <p className="text-center text-[var(--color-accent-dark)] font-semibold">
        📱 Build and publish apps to the Google Play Store to stand out to recruiters and users alike!
      </p>
    </div>
  );
};

export default AndroidDevelopment;
