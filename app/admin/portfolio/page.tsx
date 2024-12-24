
'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { projects } from '@/data/portfolio'
import type { PortfolioProject } from '@/types/portfolio'

export default function AdminPortfolioPage() {
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null)

  const handleSave = async (project: PortfolioProject) => {
    // TODO: Implement save functionality with your backend
    console.log('Saving project:', project)
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Portfolio Management</h1>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => setEditingProject(project)}
                >
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {editingProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
          <div className="container max-w-2xl mx-auto mt-20 p-6 bg-background rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Edit Project</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Title</label>
                <Input 
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({
                    ...editingProject,
                    title: e.target.value
                  })}
                />
              </div>
              {/* Add more fields as needed */}
              <div className="flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setEditingProject(null)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => {
                    handleSave(editingProject)
                    setEditingProject(null)
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
